import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';
import { Col, Row } from 'antd';
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const App = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };
  return (
    <Row justify="center" style={{ marginTop: 24,}}>
<Col span={12}>

  <h2 align="center" className='accordian-head'>What services make us TICK?</h2>
  <p align="center" className='accordian-bottom' style={{fontSize:18}}>Our 4 major services include:</p>
</Col>

       <Col span={20}>
       <div className="tabs">
      <div className="tab">
        <input type="checkbox" id="chck1" className='checkboxes'/>
        <label className="tab-label" for="chck1">
        <img src="./t.png" alt="accordian image" className='accordian-img'/>

          
          
          Total commitment towards seamless on-time delivery of a wide variety of industrial spares & consumables. 

</label>
        <div className="tab-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" id="chck2"  className='checkboxes'/>
        <label className="tab-label" for="chck2"> <img src="./i.png" alt="accordian image" className='accordian-img'/>
        Information to compare technical specifications, prices, & online warranties of industrial spares & consumables.


</label>
        <div className="tab-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
        </div>
      </div>


      <div className="tab">
        <input type="checkbox" id="chck3"  className='checkboxes'/>
        <label className="tab-label" for="chck3"> <img src="./c.png" alt="accordian image" className='accordian-img'/>
        Carefully curated solutions to meet dynamic on-demand requirements on the delivery & quality front.




        
        </label>
        <div className="tab-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" id="chck4"  className='checkboxes'/>
        <label className="tab-label" for="chck4"> <img src="./k.png" alt="accordian image" className='accordian-img'/>
       Keeping vendor & customer satisfaction as well as relationship management as our top priority for seamless repeat procurement & sales.


</label>
        <div className="tab-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
        </div>
      </div>
    </div>
    <div  style={{ paddingTop: 24,}}></div>


    </Col>
    </Row>
  );
};
export default App;