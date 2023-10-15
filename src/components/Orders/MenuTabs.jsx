import { Tabs, Tab } from 'react-bootstrap';


const MenuTabs = () => {
    return (
        <Tabs defaultActiveKey="burgers">
        <Tab eventKey="burgers" title="Burgers">
            {/* Display Burger MenuItems here */}
        </Tab>
        {/* ... other tabs ... */}
        </Tabs>
    );
    }
    

    export default MenuTabs;