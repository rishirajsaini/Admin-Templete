import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Users.css'

const Users = () => {
    return (
        <>
            <div className='dflex'>
                <Sidebar />


                <div className='container'>
                
                





                    <div class="register-photo ">
                        <div class="form-container">
                            <div class="image-holder">

                            <h3 className='b'>Image</h3>
                            </div>
                            <form >
                                <h2 class="text-center"><strong>Create</strong> an account.</h2>
                                <div class="form-group">
                                    <input class="form-control" type="email" name="email" placeholder="user name" />
                                </div>
                                <div class="form-group">
                                    <input class="form-control" type="password" name="password" placeholder="Name & SurName " />
                                </div>
                                <div class="form-group">
                                    <input class="form-control" type="password" name="password-repeat" placeholder="Email" />
                                </div>
                                <div class="form-group">
                                    <input class="form-control" type="password" name="password-repeat" placeholder="Phone" />
                                </div>
                                <div class="form-group">
                                    <input class="form-control" type="password" name="password-repeat" placeholder="Password" />
                                </div>
                                <div class="form-group">
                                    <input class="form-control" type="password" name="password-repeat" placeholder="Address" />
                                </div>
                                <div class="form-group">
                                    <input class="form-control" type="password" name="password-repeat" placeholder="Country" />
                                </div>

                         
                                <div class="form-group">
                                  
                                    <button className='btnbox'>create</button>
                                </div>
                                <a class="already" href="#">You already have an account? Login here.</a>
                            </form>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Users