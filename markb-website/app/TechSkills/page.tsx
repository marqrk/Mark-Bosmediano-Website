export default function TechSkills() {
    return (
        <div className="relative  flex-col top-10 items-center justify-center  font-sans mx-auto pb-10">
            <h1 className="text-5xl font-extrabold text-center pb-5">Mark's Technical Skills</h1>
            <p className="text-xl font-bold text-center pb-5">Below are all of my technical skills </p>
            <table className="table-fixed border-collapse border w-full md:w-3/4 mx-auto">
                <thead>
                    <tr>
                        <td className="text-center border bg-gray-800">Category
                        </td>
                        <td className="text-center border bg-gray-800">Skills
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center border bg-gray-800">Coding Languages
                        </td>
                        <td className="text-center border bg-gray-800">
                            <ul className="list-none">
                                <li> Python
                                </li>
                                <li> C++
                                </li>
                                <li> Javascript
                                </li>
                                <li> HTML
                                </li>
                                <li> CSS
                                </li>
                                <li> Java/Scala
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center border bg-gray-800">Technologies
                        </td>
                        <td className="text-center border bg-gray-800">
                            <ul className="list-none">
                                <li> React
                                </li>
                                <li> Flask/Flask SQLAlchemy
                                </li>
                                <li> PostgreSQL
                                </li>
                                <li> Git/Github
                                </li>
                                <li> Next.js
                                </li>
                                <li> Tailwind CSS
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center border bg-gray-800">Platforms/IDEs
                        </td>
                        <td className="text-center border bg-gray-800">
                            <ul className="list-none">
                                <li> Microsoft Visual Studio
                                </li>
                                <li> Unity Engine
                                </li>
                                <li> Unreal Engine
                                </li>
                                <li> Ubuntu/Linux
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center border bg-gray-800">Concepts I have some familiarity with
                        </td>
                        <td className="text-center border bg-gray-800">
                            <ul className="list-none">
                                <li> Front-end Development
                                </li>
                                <li> Back-end Development
                                </li>
                                <li> Cybersecurity
                                </li>
                                <li> Object Oriented Programming
                                </li>
                                <li> Functional Programming
                                </li>
                                <li> Computer Vision
                                </li>
                                <li> Virtual and Augmented Reality
                                </li>
                                <li> Computer Modeling/Simulation
                                </li>
                                <li> Machine Learning techniques
                                </li>
                                <li> Data Mining techniques
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

