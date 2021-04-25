import './App.css';
import CourseComponent from './components/courses/course';
import HeaderComponent from './components/courses/header';
import StudentComponent from './components/students/student';

function App() {
  return (
    <div className="App">
      <h3>Listado cursos y estudiantes</h3>
      <table className="main-table">
        <CourseComponent courseName="Databases"/>
        <HeaderComponent firstValue="Name" secondValue="Grade" thirdValue="Gender"></HeaderComponent>
        <StudentComponent student={{name:"Pepito", grade:3.5, gender:"Male"}}/>
        <StudentComponent student={{name:"Maria", grade:2.1, gender:"Female"}}/>
        <StudentComponent student={{name:"Carlitos", grade:2, gender:"Male"}}/>
        <StudentComponent student={{name:"Juan", grade:4, gender:"Male"}}/>
        <StudentComponent student={{name:"Ines ", grade:5, gender:"Female"}}/>
        {/* Course 2 */}
        <CourseComponent courseName="Electronics"/>
        <HeaderComponent firstValue="Name" secondValue="Grade" thirdValue="Gender"></HeaderComponent>
        <StudentComponent student={{name:"Lydia", grade:0.8, gender:"Female"}}/>
        <StudentComponent student={{name:"Valentina", grade:1.5, gender:"Female"}}/>
        <StudentComponent student={{name:"Diego", grade:3, gender:"Male"}}/>
        <StudentComponent student={{name:"Rufino", grade:0.8, gender:"Male"}}/>
        <StudentComponent student={{name:"Martina", grade:4, gender:"Female"}}/>
        {/* Course 3 */}
        <CourseComponent courseName="Physical"/>
        <HeaderComponent firstValue="Name" secondValue="Grade" thirdValue="Gender"></HeaderComponent>
        <StudentComponent student={{name:"Marcos", grade:3, gender:"Male"}}/>
        <StudentComponent student={{name:"Markel", grade:1.5, gender:"Male"}}/>
        <StudentComponent student={{name:"Camila", grade:2.1, gender:"Female"}}/>
        <StudentComponent student={{name:"Ariadna", grade:2.7, gender:"Female"}}/>
        <StudentComponent student={{name:"Victoria", grade:5, gender:"Female"}}/>
        {/* Course 4 */}
        <CourseComponent courseName="English"/>
        <HeaderComponent firstValue="Name" secondValue="Grade" thirdValue="Gender"></HeaderComponent>
        <StudentComponent student={{name:"Belen", grade:3.5, gender:"Female"}}/>
        <StudentComponent student={{name:"Luisa", grade:2.3, gender:"Female"}}/>
        <StudentComponent student={{name:"Edgar", grade:3, gender:"Male"}}/>
        <StudentComponent student={{name:"Nicole", grade:4, gender:"Female"}}/>
        <StudentComponent student={{name:"Luciano", grade:2, gender:"Male"}}/>
        
      </table>
    </div>
  );
}

export default App;
