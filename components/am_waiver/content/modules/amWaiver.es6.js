const React = require("react");
const ReactDOM = require("react-dom");
const F8ReactComponent = require("react-core/F8ReactComponent");
const Controller = require("am_waiver/utils/Controller");
class amWaiver extends F8ReactComponent {
  constructor(props) {
            let tableNo = window.location.href;
        var bay = tableNo.slice(-2);
       super(props);
    this.state = {
      values: [],
      bucketGA: this.props.attributes.bucket_ga,
      isToggleOn: true,
      first_name:'',
      last_name:'',
      minor_1:'',
      minor_2:'',
      minor_3:'',
      minor_4:'',
      minor_5:'',
      minor_6:'',
      email:'',
      bay:bay
    };
        this.handleChange = this.handleChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

  }
   handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    // alert('A name was submitted: ' + JSON.stringify(this.state.name));
  }

      createUI(){
     return this.state.values.map((el, i) => 
       <div key={i}>
       <p><b>Minor</b></p>
        <div className="input-group">
                <span className="input-group-addon" >
                  Full name
                </span>
            <input type="text" className="form-control" name={'minor_'+[i]} value={el||''} placeholder="Minor full Name" onChange={this.handleChange.bind(this, i)} />
              </div>
    	    <input type='button' className="btn btn-danger" value='- Remove' onClick={this.removeClick.bind(this, i)}/>
          <br />
          <br />

       </div>       
     )
  }

  handleChange(i, event) {
     let values = [...this.state.values];
     values[i] = event.target.value;
     this.setState({ values });
  }
  
  addClick(){
    this.setState(prevState => ({ values: [...prevState.values, '']}))
  }
  
  removeClick(i){
     let values = [...this.state.values];
     values.splice(i,1);
     this.setState({ values });
  }
  
  handleSubmit(event) {
  //  alert('A name was submitted: ' + JSON.stringify(this.state.values));
   //  alert("bay: " + JSON.stringify(this.state.bay));
   // alert('A name was submitted: ' + this.state.values.join(', '));
   let values = [...this.state.values];
    let data = {"first_name":this.state.first_name, "last_name":this.state.last_name, "email":this.state.email,  "bay":this.state.bay, "minor_1":values[0], "minor_2":values[1], "minor_3":values[2], "minor_4":values[3], "minor_5":values[4], "minor_6":values[5]};
  //  alert("A name was submitted: " + JSON.stringify(data));
    //alert(" Thank you " + JSON.stringify(this.state.first_name) + "your waiver was summitted" );


   // console.log(data);
    var controller = new Controller();
    controller.updateBucket(data);
    alert(" Thank you " + this.state.first_name + " your waiver was summitted" ) ? "" : location.reload();

    //window.location.href = 'home';

    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="row moduleContainer">
          <div className="col-md-8 text-center">
            <img src="./images/Axemonkeys_logohat_web.png" alt="Axe Monkeys logo" width="200"/>
          </div>
        </div>
        <div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="row moduleContainer">
            <div className="col-md-8 text-center">
              <div className="hdivider">
                <span className="hdivider-label-big">
                  <b>Scroll to bottom to check consent box:</b>
                </span>
                <div className="hdivider-ext-line hdivider-ext-line_title"></div>
              </div>

              <h3>
              WAIVER AND RELEASE OF LIABILITY, AND ASSUMPTION OF RISK
                
              </h3>

              <div className="waiver_box">
                <b>
                WARNING: BY SIGNING THIS WAIVER YOU ARE WAIVING CERTAIN LEGAL RIGHTS – PLEASE READ THE DOCUMENT BELOW CAREFULLY
                
                </b>
                <br />
                <br />
                In consideration of Axe Monkeys Franchising and all its franchisee's individual companies (herein after referred to as Axe Monkeys) furnishing services and /or equipment to enable me to participate in axe or other items being thrown, the rage room or virtual reality rooms, (hereafter collectively known as "axe throwing"). I agree as follows: I fully understand and acknowledge that; (a) risks and dangers exist in my use of axes and hatchets equipment and my participation in axe throwing activities; (b) my participation in such activities and/or use of such equipment may result in my injury or illness including but not limited to bodily injury, disease strains, fractures, partial and/or total paralysis, eye injury, blindness, heat stroke, heart attack, death or other ailments that could cause serious disability; (c) these risks and dangers may be caused by the negligence of the owners, employees, officers or agents of Axe Monkeys ; the negligence of the participants, the negligence of others, accidents, breaches of contract, the forces of nature or other causes. These risks and dangers may arise from foreseeable or unforeseeable causes; and (d) by my participation in these activities and/or use of equipment, I hereby assume all risks and dangers and all responsibility for any losses and/or damages, whether caused in whole or in part by the negligence or other conduct of the owners, agents, officers, employees of Axe Monkeys , or by any other person.

                <br />
                <br />
                I, ON BEHALF OF MYSELF, MY PERSONAL REPRESENTATIVES AND MY HEIRS, HEREBY VOLUNTARILY AGREE TO RELEASE, WAIVE, DISCHARGE, HOLD HARMLESS, DEFEND AND INDEMNIFY AXE MONKEYS AND IT’S PRESENT OR FUTURE OWNERS, AGENTS, OFFICERS, AND EMPLOYEES FROM ANY AND ALL CLAIMS, ACTIONS, OR LOSSES FOR BODILY INJURY, PROPERTY DAMAGE, WRONGFUL DEATH, LOSS OF SERVICES OR OTHERWISE WHICH MAY ARISE OUT OF MY USE OF AXE THROWING EQUIPMENT OR MY PARTICIPATION IN AXE THROWING ACTIVITIES. I SPECIFICALLY UNDERSTAND THAT I AM RELEASING, DISCHARGING AND WAIVING ANY CLAIMS OR ACTIONS THAT I MAY HAVE PRESENTLY OR IN THE FUTURE FOR NEGLIGENT ACTS OR OTHER CONDUCT BY THE OWNERS, AGENTS, OFFICERS OR EMPLOYEES OF AXE MONKEYS.
                <br />
                <br />
                MEDICAL PERMISSION AUTHORIZATION - If the participant is of minority age, the undersigned parent or guardian hereby gives permission for Axe Monkeys to authorize emergency medical treatment as may be deemed necessary for the child named below while participating in axe throwing from this date on.
                <br />
                <br />
                I HAVE READ THE ABOVE WAIVER AND RELEASE AND BY SIGNING IT AGREE IT IS MY INTENTION TO EXEMPT AND RELIEVE AXE MONKEYS FROM LIABILITY FOR PERSONAL INJURY, PROPERTY DAMAGE OR WRONGFUL DEATH CAUSED BY NEGLIGENCE OR ANY OTHER CAUSE.
                <br />
                <br />
                I further agree that I have read and will adhere to all Safety Rules for the Axe Monkeys Facility, posted on the wall, and I will follow the instruction of Axe Monkeys trainers and lane supervisors. I understand that as a public facility, pictures and or video may be taken by Axe Monkeys staff or others, and I grant them free of charge the right to publish, and re-publish photographic portraits or pictures of me or in which I may be included, in whole or in part.
                <br />
                <br />
                I agree that violation of any of the Axe Monkeys rules is grounds for immediate expulsion with no refunds.
                <br />
                <br />
                By hitting accept and giving your information, you are consenting to the use of your electronic signature in lieu of an original signature on paper. You have the right to request that you sign a paper copy instead which is available at our location. By hitting accept, or giving your information on this waiver, you are waiving that right. After consent, you may, upon written request to us, obtain a paper copy of an electronic record. No fee will be charged for such copy and no special hardware or software is required to view it. Your agreement to use an electronic signature with us for any documents will continue until such time as you notify us in writing that you no longer wish to use your electronic signature. There is no penalty for withdrawing your consent. You should always make sure that we have a current email address in order to contact you regarding any changes, if necessary.
                <br />
                <br />
               
                <div class="checkbox">
                  <label>
                    <input type="checkbox" required /> I consent I reviewed and agree to
                    waiver
                  </label>
                </div>
                <br />
                <br />
              </div>

              <div className="input-group">
              <input type="hidden" name="bay" value={this.bay} onChange={this.handleInputChange} />
                <span className="input-group-addon">First Name</span>
                <input type="text" className="form-control" name="first_name" value={this.state.first_name} onChange={this.handleInputChange} required/>
              </div>

              <div className="input-group">
                <span className="input-group-addon">Last Name</span>
                <input type="text" className="form-control" name="last_name" value={this.state.last_name} onChange={this.handleInputChange} required/>
              </div>

              <div className="input-group">
                <span className="input-group-addon">Email</span>
                <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleInputChange} required/>
              </div>

              {this.createUI()}

              <br />
              <br />
              <div>
              <b>COMPLETE SECTION BELOW IF PARTICIPANT ABOVE IS A MINOR (Under 18 years old):</b> I am the parent or legal guardian of the minor named above. I have the legal right to consent to and, by signing below, I hereby do consent to the terms and conditions of this Release of Liability and Waiver of Claims. 
              </div>
              <br />
              <br />

              <input
                type="button"
                value="+ Add minor"
                className="btn btn-default"
                onClick={this.addClick.bind(this)}
              />
              <br />
              <br />

              <button type="submit" className="btn btn-default">
                Submit
              </button>
            </div>
          </div>
        </form>
        <hr />
      </div>
    );
                 
  }
    componentDidMount() {
    this.setState({
      bucket: this.props.attributes.bucket
    });
  }
}
module.exports = amWaiver;
