import { Col, Row } from 'antd';
import { Card,  } from 'antd';

const About = () => ( 
    <>
  
  <Row justify="center">
      <Col span={24}>
      <h2 align="center" className='page-title'>About</h2>

      </Col>
    </Row>
    <Row justify="center">
    <Col xs={24} xl={12}>
      <p align="center" className='about-description'>We are an e-commerce aggregator platform for PAN India sellers, suppliers, distributors, manufacturers, & consumers who are involved in the online buying & selling of industrial consumables, machinery, equipment, & spares.
</p>

      </Col>
    </Row>
    <div className ="bg-pink" style={{ background: '#F3465F', padding:'5px 30px 30px 30px'}}>
    <Row justify="center" >
        <Col xs={24} xl={12}>
        <p align="center" className='about-des'> We help to digitalise the industrial supply chain thereby tackling the major issue of industrial downtime due to scarcity of industrial spare parts through: </p>
        </Col>
    </Row>
    <Row justify="center"  className='card-section' style={{ marginTop: '71px' , padding:'5px 30px 30px 30px'}}>

        
    <Col xs={30} xl={6}>
       
        <Card style={{ width: 271 , height :265 }} className='card-about'>
        <p align="center" className="cards-no" >   <img src="./1indi.png" alt="profile card"/></p>
      <p align="center" className="card-des">Seamless one-click buy/sell transactions of industrial spares, equipment, etc.</p>
      
    </Card>
        </Col>
        <Col xs={30} xl={6}>
        <Card style={{ width: 271 , height :265 }} className='card-about'>
        <p align="center" className="cards-no" >   <img src="./2indi.png" alt="profile card"/></p>
      <p align="center" className="card-des" >Wide selection for these spares with multiple-way price comparison & instant specification comparison.</p>
      
    </Card>
        </Col>
        <Col xs={30} xl={6}>
        <Card style={{ width: 271 , height :265 }} className='card-about'>
        <p align="center" className="cards-no" >   <img src="./3indi.png" alt="profile card"/></p>
      <p align="center" className="card-des" >Easy to find product options equipped with financial support and different modes of delivery, including last-mile delivery + real-time tracking.</p>
      
    </Card>
        </Col>
        <Col xs={30} xl={6}>
        <Card style={{ width: 271 , height :265 }} className='card-about'>
        <p align="center" className="cards-no" >   <img src="./4indi.png" alt="profile card"/></p>
      <p align="center" className="card-des" >Assurance on the quality & warranty with checks from our end.
</p>
      
    </Card>
        </Col>
    </Row>
</div>

<Row justify="center" style={{ marginTop: '20px'}} >
    <Col xs={30} xl={10}>
    <Card className='card-m'
    
    style={{ width: 500 , height :527 }}
    cover={<img alt="example" src="./mission.png" />}
  >
    <h2 className='m-v-head'>Our Mission</h2>
    <p className='mission-para'>To provide an AI-powered one-stop online portal for buyers & sellers of industrial consumables & spares with the best varieties & prices, online warranty & quality assurance, & most diverse delivery options!</p>
  </Card>
      </Col>
      <Col xs={30} xl={10}>
      <Card className='card-m'
   
    style={{ width: 500 , height :527 }}
    cover={<img alt="example" src="./vission-indi.png" />}
  >
<h2 className='m-v-head'>Our Vision</h2>
<p className='mission-para'>To empower the MSMEs in the B2B space by digitally revolutionising the industrial spare parts supply chain pan India by seamlessly connecting the manufacturers, distributors, OEMs, & suppliers with the target consumers - through a seamless one-stop portal for quick procurement & sale!</p>
  </Card>
      </Col>
    </Row>

    

    </>



);
export default About;