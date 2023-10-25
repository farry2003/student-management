import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
const StudentList = (student) => {
  const students = useSelector((state) => state.student.students);
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  bg-secondary text-white">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand text-light" href="/"><h2>FACULTY</h2></a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          </ul>
          <Link to="/add-student">
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Add new student</button>
          </Link>
        </div>
      </nav>
    
      <div class="container m-5">
 	<div class="row">
         <div class="span1">
       
         {/* <a href='http://127.0.0.1:5500/'>INFO</a> */}
         <div class="row"><div class="col-lg-3 col-sm-6"><div class="card-stats card"><div class="card-body"><div class="row"><div class="col-5"><div class="icon-big text-center icon-warning"><i class="nc-icon nc-chart text-warning"></i></div></div><div class="col-7"><div class="numbers"><p class="card-category"><h3>Number of student</h3></p><h3 class="card-title">150</h3></div></div></div></div><div class="card-footer"><div class="stats"><i class="fas fa-redo mr-1"></i>Update Now</div></div></div></div>
        
         <div class="col-lg-3 col-sm-6 m-b-7"><div class="card-stats card"><div class="card-body"><div class="row"><div class="col-5"><div class="icon-big text-center icon-warning"><i class="nc-icon nc-light-3 text-success"></i></div></div><div class="col-7"><div class="numbers"><p class="card-category"><h3>Number of student Present</h3></p><h4 class="card-title"> 1,345</h4></div></div></div></div><div class="card-footer"><div class="stats"><i class="far fa-calendar-alt mr-1"></i>Last Month</div></div></div></div>
        
         <div class="col-lg-3 col-sm-6"><div class="card-stats card"><div class="card-body"><div class="row"><div class="col-5"><div class="icon-big text-center icon-warning"><i class="nc-icon nc-vector text-danger"></i></div></div><div class="col-7"><div class="numbers"><p class="card-category"><h3>Number of Lecture</h3></p><h4 class="card-title">23</h4></div></div></div></div>
        
         <div class="card-footer"><div class="stats"><i class="far fa-clock-o mr-1"></i>In the last day</div></div></div></div><div class="col-lg-3 col-sm-6"><div class="card-stats card"><div class="card-body"><div class="row"><div class="col-5"><div class="icon-big text-center icon-warning"><i class="nc-icon nc-favourite-28 text-primary"></i></div></div><div class="col-7"><div class="numbers"><p class="card-category"><h3>TOTAL LECTURE</h3></p><h4 class="card-title">45</h4></div></div></div></div><div class="card-footer"><div class="stats"><i class="fas fa-redo mr-1"></i>Update now</div></div></div></div></div>
</div> 
 	</div>
 </div> 
 
      <div className="container">
        <table className="table">
          <thead className="thead-dark">
            
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">Name</th>
              <th scope="col">ATTENDENCE</th>
              <th scope="col">Class</th>
              <th scope="col">Birthdate</th>
              <th scope="col">Address</th>
              <th scope="col">Email Id</th>
              <th scope="col">Contact No.</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            
            
            {students.map((student,i)=>{return(
              <>
              <tr>
               <th scope="row">{i + 1}</th>
              <td key={{i}}>{student.name}</td>
              <td key={{i}}>{student.gender}</td>
              <td key={{i}}>{student.class}</td>
              <td key={{i}}>{student.birthdate}</td>
              <td key={{i}}>{student.street},{student.city} {student.state} {student.country} {student.zip}</td>
              <td key={{i}}>{student.email}</td>
              <td key={{i}}>{student.phone}</td>
              <td ><Link to={`/edit-student/${student.name}`}><button onClick={student} className="btn btn-dark">Edit</button></Link></td>
              </tr>
              </>
              )})}
            
          
          </tbody>
        </table>
      </div>

       
    </>
  )


}

export default StudentList;


  

// function Faculty() {
//   return (
    
   
//     <>
    
      
//  
// {/* 
//         {/* <h1>Dashboard</h1>
//             <div className="dashboard-content">
//               <div className="flexcard-container">
//                 <div className="card">
//                   <h2>Card 1 Title</h2>
//                   <p>Card 1 Content goes here.</p>
//                 </div>
//                 <div className="card">
//                   <h2>Card 2 Title</h2>
//                   <p>Card 2 Content goes here.</p>
//                 </div>
//                 <div className="card">
//                   <h2>Card 3 Title</h2>
//                   <p>Card 3 Content goes here.</p>
//                 </div>
//                 <div className="card">
//                   <h2>Card 4 Title</h2>
//                   <p>Card 4 Content goes here.</p>
//                 </div>
//               </div>
//             </div> */}
//     		{/* {/* <table class="table-condensed table-bordered table-striped">
//                 <thead>
//                     <tr>
//                       <th colspan="7">
//                         <span class="btn-group">
//                             <a class="btn"><i class="icon-chevron-left"></i></a>
//                         	<a class="btn active">February 2012</a>
//                         	<a class="btn"><i class="icon-chevron-right"></i></a>
//                         </span>
//                       </th>
//                     </tr>
//                     <tr>
//                         <th>Su</th>
//                         <th>Mo</th>
//                         <th>Tu</th>
//                         <th>We</th>
//                         <th>Th</th>
//                         <th>Fr</th>
//                         <th>Sa</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td class="muted">29</td>
//                         <td class="muted">30</td>
//                         <td class="muted">31</td>
//                         <td>1</td>
//                         <td>2</td>
//                         <td>3</td>
//                         <td>4</td>
//                     </tr>
//                     <tr>
//                         <td>5</td>
//                         <td>6</td>
//                         <td>7</td>
//                         <td>8</td>
//                         <td>9</td>
//                         <td>10</td>
//                         <td>11</td>
//                     </tr>
//                     <tr>
//                         <td>12</td>
//                         <td>13</td>
//                         <td>14</td>
//                         <td>15</td>
//                         <td>16</td>
//                         <td>17</td>
//                         <td>18</td>
//                     </tr>
//                     <tr>
//                         <td>19</td>
//                         <td class="btn-primary"><strong>20</strong></td>
//                         <td>21</td>
//                         <td>22</td>
//                         <td>23</td>
//                         <td>24</td>
//                         <td>25</td>
//                     </tr>
//                     <tr>
//                         <td>26</td>
//                         <td>27</td>
//                         <td>28</td>
//                         <td>29</td>
//                         <td class="muted">1</td>
//                         <td class="muted">2</td>
//                         <td class="muted">3</td>
//                     </tr>
//                 </tbody>
//             </table>*/}
//      
//     </>
//   )
// }

// export default {Faculty};
