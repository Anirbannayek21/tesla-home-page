import './App.css'
import Header from './component/Header'
import Accessories from './assets/Desktop-Accessories.jpg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'
import Item from './component/Item';


function App() {
  return (
    <div className="App">
      {/* header */}
      <Header/>
      
      <div className="app-container">
        <Item
          title='Lowest Cost Solar Panels in America'
          description='Money-back guarantee'
          backgroundImg ={SolarPanels}
          leftButton = 'ORDER NOW'
          leftButtonLink = ''
          rightButton = 'LEARN MORE'
          rightButtonLink = ''
          twoButton = 'true'
          first
        />
        <Item
          title='Model S'
          description='Staring st $69,420'
          backgroundImg = {ModelS}
          leftButton = 'CUSTOM ORDER'
          leftButtonLink = ''
          rightButton = 'EXISTING INVENTORY'
          rightButtonLink = ''
          twoButton = 'true'
        />
        <Item
          title='Model 3'
          description = 'Order Online for TouchLess Delivary'
          backgroundImg = {Model3}
          leftButton = 'CUSTOM ORDER'
          leftButtonLink = ''
          rightButton = 'EXISTING INVENTORY'
          rightButtonLink = ''
          twoButton = 'true'
        />
        <Item
          title='Model X'
          description = 'Order Online for TouchLess Delivary'
          backgroundImg = {ModelX}
          leftButton = 'CUSTOM ORDER'
          leftButtonLink = ''
          rightButton = 'EXISTING INVENTORY'
          rightButtonLink = ''
          twoButton = 'true'
        />
        <Item
          title='Model Y'
          description = 'Order Online for TouchLess Delivary'
          backgroundImg = {ModelY}
          leftButton = 'CUSTOM ORDER'
          leftButtonLink = ''
          rightButton = 'LEARN MORE'
          rightButtonLink = ''
          twoButton = 'true'
        />
        <Item
          title='Solar for New Roofs'
          description = 'Solar Roof Costs Less Than a New Roof Plus Solar Panels'
          backgroundImg = {SolarRoof}
          leftButton = 'ORDER NOW'
          leftButtonLink = ''
          rightButton = 'LEARN MORE'
          rightButtonLink = ''
          twoButton = 'true'
        />
        <Item
          title='Accessories'
          description = ''
          backgroundImg = {Accessories}
          leftButton = 'SHOP NOW'
          leftButtonLink = ''
          rightButton = ''
          rightButtonLink = ''
        />
      </div>
    </div>
  );
}

export default App;
