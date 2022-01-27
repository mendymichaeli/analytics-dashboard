import "./NewMembers.css";
import { RemoveRedEyeOutlined } from "@mui/icons-material";

export default function NewMembers() {
  return (
    <div className="NewMembers">
      <h1>New Member List</h1>
      <div className="NewSingleMember">
        <div className="memberImg"><img  src="https://cdni.rt.com/actualidad/public_images/2021.12/article/61cd4209e9ff71184566e4ce.JPG" alt="" /></div>
        <div className="memberName">George Washington</div>
        <div className="memberButtonDiv"><button className="memberButton"><RemoveRedEyeOutlined /> Display</button></div>
      </div>
      <div className="NewSingleMember">
        <div className="memberImg"><img  src="https://www.mercurynews.com/wp-content/uploads/2020/01/SAG_PittHorizontal-1.jpg" alt="" /></div>
        <div className="memberName">Mark Zukerberg</div>
        <div className="memberButtonDiv"><button className="memberButton"><RemoveRedEyeOutlined /> Display</button></div>
      </div>
      <div className="NewSingleMember">
        <div className="memberImg "><img  src="https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-98328574_472319_i19gtm.jpg" alt="" /></div>
        <div className="memberName">Jack Matolan</div>
        <div className="memberButtonDiv"><button className="memberButton"><RemoveRedEyeOutlined /> Display</button></div>
      </div>
      <div className="NewSingleMember">
        <div className="memberImg"><img  src="https://image.cnbcfm.com/api/v1/image/100496736-steve-jobs-march-2011-getty.jpg" alt="" /></div>
        <div className="memberName">Martin Ford</div>
        <div className="memberButtonDiv"><button className="memberButton"><RemoveRedEyeOutlined /> Display</button></div>
      </div>
      <div className="NewSingleMember">
        <div className="memberImg"><img  src="https://upload.wikimedia.org/wikipedia/commons/6/62/Steve_Jobs_%281%29.JPG" alt="" /></div>
        <div className="memberName">Donald Mc'donalds</div>
        <div className="memberButtonDiv"><button className="memberButton"> <RemoveRedEyeOutlined /> Display</button></div>
      </div>

    </div>
  );
}
