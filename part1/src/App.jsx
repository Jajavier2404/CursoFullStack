import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

const App = () => { 
  const course = [{
    name: 'Half Stack application development',
    parts :[
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
    ],
  }]

  
  return (
    <div>
      <Header course={course[0].name} />
      <Content parts={course[0].parts} />
      <Total exercises1={course[0].parts[0].exercises} exercises2={course[0].parts[1].exercises} exercises3={course[0].parts[2].exercises} />
    </div>
  )
}

export default App