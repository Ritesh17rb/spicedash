import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function SignUp() {

    const [credentials, setCredentials] = useState({ name: '', email: '', password: '', geolocation: '' })

    const handleSubmit = async (e) => {
        //Synthetic event -> preventDefault
        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })

        });

        const json = await response.json()
        console.log(json)

        if (!json.success) {
            alert('Enter Valid Credentials')
        }
        else alert('Registered Successfully')
    }
    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }


    return (


        <>

            <section className="vh-100 bg-image"
                style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: "15px" }}>
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                        <form onSubmit={handleSubmit}>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="name" >Your Name</label>

                                                <input type="text" id="form3Example1cg" className="form-control form-control-lg" name='name' value={credentials.name} onChange={onChange} />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="email">Your Email</label>

                                                <input type="email" id="form3Example3cg" className="form-control form-control-lg" name='email' value={credentials.email} onChange={onChange} />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example4cg">Password</label>

                                                <input type="password" id="form3Example4cg" className="form-control form-control-lg" name='password' value={credentials.password} onChange={onChange} />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example4cdg">Your Address</label>

                                                <input type="text" id="form3Example4cdg" className="form-control form-control-lg" name='geolocation' value={credentials.geolocation} onChange={onChange} />
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <label className="form-check-label" htmlFor="form2Example3g">

                                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                                    I agree all statements in <Link to="#!" className="text-body"><u>Terms of service</u></Link>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button type="submit"
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                            </div>

                                            <p className="text-center text-muted mt-5 mb-0">Have already an account?
                                                <Link to="/login"
                                                    className="fw-bold text-body"><u>Login here</u></Link></p>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </>

    )
}

export default SignUp
