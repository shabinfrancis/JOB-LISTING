import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import CreatableSelect from 'react-select/creatable'

const CreateJob = () => {

    // const options = Object.values(jobPostingSkills).flat();
    const [selectOption, setSelectOption] = useState(null);

    const {
        register,
        handleSubmit,reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        data.skills = selectOption;
        console.log(data);
        fetch("http://localhost:8080/post-jobs", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data)
        })
          .then((res) => res.json())
          .then((result) => {
              console.log(result);
              if(result.acknowledged === true) {
                alert("Job posted Successfully");
              }
              reset()
          });
    };

    const options = [
        { value: "html", label: "HTML" },
        { value: "css", label: "CSS" },
        { value: "javascript", label: "JavaScript" },
        { value: "react", label: "React" },
        { value: "vue", label: "Vue.js" },
        { value: "angular", label: "Angular" },
        { value: "webpack", label: "Webpack" },
        { value: "babel", label: "Babel" },
        { value: "npm", label: "NPM" },
        { value: "yarn", label: "Yarn" },
        { value: "responsive_design", label: "Responsive Design" },
        { value: "bootstrap", label: "Bootstrap" },
        { value: "material_ui", label: "Material UI" },
        { value: "nodejs", label: "Node.js" },
        { value: "expressjs", label: "Express.js" },
        { value: "mongodb", label: "MongoDB" },
        { value: "mysql", label: "MySQL" },
        { value: "postgresql", label: "PostgreSQL" },
        { value: "restful_apis", label: "RESTful APIs" },
        { value: "graphql", label: "GraphQL" },
        { value: "jwt", label: "JWT" },
        { value: "socket_io", label: "Socket.io" },
        { value: "authentication", label: "Authentication and Authorization" },
        { value: "ssr", label: "Server-side Rendering" },
        { value: "docker", label: "Docker" },
        { value: "kubernetes", label: "Kubernetes" },
        { value: "jenkins", label: "Jenkins" },
        { value: "ci_cd", label: "CI/CD" },
        { value: "aws", label: "AWS" },
        { value: "azure", label: "Azure" },
        { value: "gcp", label: "Google Cloud Platform" },
        { value: "monitoring_logging", label: "Monitoring and Logging" },
        { value: "iac", label: "Infrastructure as Code" },
        { value: "jest", label: "Jest" },
        { value: "mocha", label: "Mocha" },
        { value: "chai", label: "Chai" },
        { value: "cypress", label: "Cypress" },
        { value: "selenium", label: "Selenium" },
        { value: "testing_library", label: "Testing Library" },
        { value: "puppeteer", label: "Puppeteer" },
        { value: "communication_verbal", label: "Verbal Communication" },
        { value: "communication_written", label: "Written Communication" },
        { value: "teamwork_collaboration", label: "Collaboration" },
        { value: "teamwork_agile", label: "Agile/Scrum" },
        { value: "problem_solving_critical", label: "Critical Thinking" },
        { value: "problem_solving_analytical", label: "Analytical Skills" },
        { value: "time_management", label: "Time Management" },
        { value: "adaptability", label: "Adaptability" },
        { value: "git", label: "Git" },
        { value: "github", label: "GitHub" },
        { value: "bitbucket", label: "Bitbucket" },
        { value: "jira", label: "JIRA" },
        { value: "trello", label: "Trello" },
        { value: "asana", label: "Asana" },
        { value: "eslint", label: "ESLint" },
        { value: "prettier", label: "Prettier" },
        { value: "figma", label: "Figma" },
        { value: "sketch", label: "Sketch" },
        { value: "photoshop", label: "Photoshop" }
    ];

    // console.log(jobPostingSkills);
    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <div className='bg-[#fafafa] py-10px-4 lg:px-16'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-5 py-10'>

                    {/* 1st row */}
                    <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full">
                            <label className='block mb-2 text-lg'>Job Title</label>
                            <input type="text" defaultValue={"Web Developer"}
                                {...register("jobTitle")} className='create-job-input'
                            />
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <label className='block mb-2 text-lg'>Company Name</label>
                            <input type="text" placeholder='Ex: Microsoft'
                                {...register("companyName")} className='create-job-input'
                            />
                        </div>
                    </div>

                    {/* 2nd row */}
                    <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full">
                            <label className='block mb-2 text-lg'>Minimum Salary</label>
                            <input type="text" placeholder="20k"
                                {...register("minPrice")} className='create-job-input'
                            />
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <label className='block mb-2 text-lg'>Maximum Salary</label>
                            <input type="text" placeholder='100k'
                                {...register("maxPrice")} className='create-job-input'
                            />
                        </div>
                    </div>

                    {/* 3rd row */}
                    <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full">
                            <label className='block mb-2 text-lg'>Salary Type</label>
                            <select {...register("salaryType", { required: true })} className='create-job-input'>
                                <option value="">Choose your salary</option>
                                <option value="Hourly">Hourly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <label className='block mb-2 text-lg'>Job Location</label>
                            <input type="text" placeholder='Ex: Silicon Valley'
                                {...register("jobLocation")} className='create-job-input'
                            />
                        </div>
                    </div>

                    {/* 4th row */}
                    <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full">
                            <label className='block mb-2 text-lg'>Job Posting Date</label>
                            <input type="date" placeholder="ex: 2024-01-01"
                                {...register("postingDate")} className='create-job-input'
                            />
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <label className='block mb-2 text-lg'>Experience Level</label>
                            <select {...register("experienceLevel", { required: true })} className='create-job-input'>
                                <option value="">Choose your experience</option>
                                <option value="NoExperience">No experience</option>
                                <option value="Internship">Internship</option>
                                <option value="Work remotely">Remote work</option>
                            </select>
                        </div>
                    </div>

                    {/* 5th row */}
                    <div>
                        <label className='block mb-2 text-lg'>Required Skills</label>
                        <CreatableSelect
                            defaultValue={selectOption}
                            onChange={setSelectOption}
                            options={options}
                            isMulti
                            className='create-job-input py-4'
                        />
                    </div>

                    {/* 6th row */}
                    <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full">
                            <label className='block mb-2 text-lg'>Company Logo</label>
                            <input type="url" placeholder="URL:"
                                {...register("companyLogo")} className='create-job-input'
                            />
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <label className='block mb-2 text-lg'>Employment Type</label>
                            <select {...register("employmentType", { required: true })} className='create-job-input'>
                                <option value="">Choose your experience</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Temporary">Temporary</option>
                            </select>
                        </div>
                    </div>

                    {/* 7th row */}
                    <div className='w-full'>
                        <label className='block mb-2 text-lg'>Job Description</label>
                        <textarea className='w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700'
                            rows={6} placeholder='Job Description' {...register("description")} />
                    </div>

                    {/* 8th row */}
                    <div className="w-full">
                        <label className='block mb-2 text-lg'>Job Posted By</label>
                        <input type="email" placeholder="Enter your Email"
                            {...register("postedBy")} className='create-job-input'
                        />
                    </div>
                    <input type="submit" className='block mt-12 bg-secondary text-white font-semibold px-8 py-2 rounded-md cursor-pointer' />
                </form>
            </div>
        </div>
    )
}

export default CreateJob