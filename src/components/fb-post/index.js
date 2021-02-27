import React from 'react'
import FbImageLibrary from 'react-fb-image-grid'
import "./index.css"
function FbPostComp(props) {
    return(
       <div className='my-conatiner'>
           <div className='avatar'>
               <img src={props.avatar} alt="Syed Mudassir Iftikhar"/>
                <span>
                <h1> {props.createdBy}</h1>
                <p>{props.createdAt}</p>
                <h3> {props.description}</h3>
               </span>
           </div>
           <FbImageLibrary 
     images={['https://scontent.flhe9-1.fna.fbcdn.net/v/t1.0-9/58852760_2372729086098527_4538710675777650688_n.jpg?_nc_cat=107&ccb=2&_nc_sid=19026a&_nc_eui2=AeGFBnFR716mt78fBMZyrzeYLsgVD_ompAguyBUP-iakCEYehE5F8R-OYyiu3IofxYaZg1o8zjyKRHl-s68Hdj0F&_nc_ohc=aWIgHQ8sOAkAX-W4anD&_nc_ht=scontent.flhe9-1.fna&oh=766c14600b26f5d355a5e4d60f2d3cfd&oe=603C587F',
      'https://scontent.flhe9-1.fna.fbcdn.net/v/t1.0-9/57587033_2346861445351958_599715805482975232_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeG3dPJqJYLkF_6dVHdjizWggOuRaaoYrYiA65FpqhitiOVe3T7BJRLOQpZxt9QkOy-J2qWBR-RTaFZE0UckuTYl&_nc_ohc=jhbsoz86xC0AX9b06wm&_nc_ht=scontent.flhe9-1.fna&oh=f1ebae225578e6fb275a1fd7452044ec&oe=603C5B13',
       'https://scontent.flhe9-1.fna.fbcdn.net/v/t31.0-8/26850882_1712367888801320_15797617085959030_o.jpg?_nc_cat=108&ccb=2&_nc_sid=174925&_nc_eui2=AeGQe96ui3eKGc711fLqQCTI9ixmwzKsU_X2LGbDMqxT9b7BPlGHoTamAbqAS38N2I5pL1R8D6SKPhbTkVWpRvHx&_nc_ohc=O1-ZVGrgIDsAX-p3WGs&_nc_ht=scontent.flhe9-1.fna&oh=4af896dc9abc57bd1d1bb95f299a8ad5&oe=603C83C1',
       'https://scontent.flhe9-1.fna.fbcdn.net/v/t31.0-8/25488110_1685188231519286_5435989131949570420_o.jpg?_nc_cat=111&ccb=2&_nc_sid=174925&_nc_eui2=AeEt2tMSCMqXLd43hnzcTS-bJAVNzFjE2YskBU3MWMTZi6QAfutP_BBQoIVspmAs4_779icp6zcVK3kDdkW_J1MX&_nc_ohc=mp8lAHxy-iMAX-7oZOo&_nc_ht=scontent.flhe9-1.fna&oh=8b389dfaa0df7685e836e928e930dcf0&oe=603AC1A8',
       'https://scontent.flhe9-1.fna.fbcdn.net/v/t31.0-8/11782325_946145155423601_4386276653004163644_o.jpg?_nc_cat=106&ccb=2&_nc_sid=174925&_nc_eui2=AeGWhfNN_xlUpGewPiCbiFEAxgthwwYZKOvGC2HDBhko68REr9PrB26RZTztG7wZNqXNKX7893xSmIvefUImxYF-&_nc_ohc=clj_EE-qmvkAX__pOGd&_nc_ht=scontent.flhe9-1.fna&oh=55820c80c62c435463ac8c3b986b1107&oe=603A0AA5',
       'https://scontent.flhe9-1.fna.fbcdn.net/v/t1.0-9/49590977_2184064284965009_3362247613607837696_o.jpg?_nc_cat=107&ccb=2&_nc_sid=174925&_nc_eui2=AeGaPfOel2vGGrK5qD73c7ARSN96MB61i0dI33owHrWLR2UFFYbh7IGXeoX8kuSXK4nRvjDKhV0JTYS904dpvCrZ&_nc_ohc=UD8I8-lzsd0AX9xETSA&_nc_ht=scontent.flhe9-1.fna&oh=28cd6aca1833f1c76f7ff24af14b2711&oe=603A2A76'
    ]}
     />
       </div>
    )
}

export default FbPostComp