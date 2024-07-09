const express = require('express')
const app = express()
// const mongoose = require('mongoose')
const cors = require('cors')
const port = process.env.PORT || 8080;
require('dotenv').config()

app.use(express.json())
app.use(cors())

// mongoose.connect(process.env.DATABASE)
//   .then(() => console.log("DB Connected"))
//   .catch(err => console.log(err));


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://shabinfrancis25:4qnu87tI9rXW4tzK@jobmern.756i8f9.mongodb.net/?retryWrites=true&w=majority&appName=jobmern`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const db = client.db("mernJobPortal");
    const jobsCollection = db.collection("demoJobs");

    app.post('/post-jobs', async(req, res) => {
        const job = req.body;
        job.createAt = new Date();
        const result = await jobsCollection.insertOne(job);
        if(result.insertedId) {
            return res.status(200).send(result);
        } else {
            return res.status(404).send({
                message: "Job not created",
                status: false
            });
        }
    })

    app.get('/all-jobs', async(req, res) => {
        const jobs = await jobsCollection.find({}).toArray()
        res.send(jobs);
    })

    app.get('/job/:id', async(req, res) => {
      const id = req.params.id;
      const job = await jobsCollection.findOne({
        _id: new ObjectId(id)
      })
      res.send(job);
    })

    app.get('/myJobs/:email', async(req, res) => {
      // console.log(req.params.email)
      const jobs = await jobsCollection.find({postedBy: req.params.email}).toArray();
      res.send(jobs);
    })

    app.delete('/job/:id', async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const result = await jobsCollection.deleteOne(filter);
      res.send(result);
    })

    app.patch('/update-job/:id', async(req, res) => {
      const id = req.params.id;
      const jobData = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = {upsert: true};
      const updateDoc = {
        $set: {
          ...jobData
        },
      };

      const result = await jobsCollection.updateOne(filter, updateDoc, options);
      res.send(result)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`App listening to port ${port}`)
})
