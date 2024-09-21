
import './App.css'; 
import Item from './components/Item';
import ItemDate from './components/ItemDate'
import Card from './components/Card'

function App() {
  const  itemName2 = "SurfExcel";
  const response = [
    {
    itemName:"Nirma",
    itemDay:"20",
    itemMonth:"June",
    itemYear:"1998"
  },
  {
    itemName:"555",
    itemDay:"20",
    itemMonth:"June",
    itemYear:"1998"
  },
  {
    itemName:"Tide",
    itemDay:"20",
    itemMonth:"June",
    itemYear:"1998"
  }

]
  return (// jsx is html file in javascript
     <Card>
          <div> 
          <ItemDate  day={response[0].itemDay} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>{/*hum kuch data props ki help se custom component me bhej rhe hi  */}
          {/* we created this div tag as we follow practice to keep two siblings have same parent , as below , app , item belongs to two different parent --> */}
          <Item name={response[0].itemName}>
            Jai shree Ram. Ye wala conteent props.children se visible hoga.
            </Item>{/* // using custom created Item Element
        // ye javascriptxml hi */}

          <ItemDate  day={response[1].itemDay} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>
        <Item name={response[1].itemName}></Item>
          
          <ItemDate day={response[2].itemDay} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
          <Item name={response[2].itemName} ></Item>

          <ItemDate  day="23" month="June" year="1998"></ItemDate>
          <Item name={itemName2}></Item>
          <div className="App">Hello Jee</div>
        </div>
     </Card>
  );
}

export default App;
