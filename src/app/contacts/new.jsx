import { query } from '@firebase/firestore';
import React from 'react';
import createContact from '../../db/contacts/new';

let contact = {
    id: "venhlore",
    lastName: "VenHuizen",
    firstName: "Loren",

    phone: '6052610944',
    email: 'lvh@midco.net',
    
    birthday: new Date(1963, 0, 6),
    
    maritalStatus: false,
    spouse: {
        name: "Tammy",
        phone: "6052612638",
        email: "tvenhui@midco.net",
        birthday: new Date(1965, 4, 16)
    },

    children: {
        0: {
            name: "Heather",
            birthday: new Date(1985, 11, 3),
        },
        1: {
            name: "Keith",
            birthday: new Date(1988, 7, 22),
        },
        2: {
            name: "Zack",
            birthday: new Date(1990, 4, 1)
        },
        3: {
            name: "Rachel",
            birthday: new Date(1993, 2, 9)
        }
    },

    warmth: 5,

    giving: {
        active: true,
        frequency: 'monthly',
        amount: 825,
        last: new Date(2021, 10)
    },

    communication: {
        preference: 'text',
        frequency: 'bi-weekly',
        last: new Date(2021, 11, 3),
        lastType: 'video call'
    }
}

class NewContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: '',
            firstName: '',
            phone: '',
            email: '',
            birthday: '',
            maritalStatus: false,
            spouse: {
                name: '',
                phone: '',
                email: '',
                birthday: '',
            },
            children: {},
            warmth: 0,
            giving: {
                active: false,
                frequency: '',
                amount: 0,
                last: ''
            },
            communications: {
                preference: '',
                frequency: '',
                last: '',
                lastType: ''
            }
        }
        this.vaidateInput = this.validateInput.bind(this);
        this.updateSpouse = this.updateSpouse.bind(this);

    }

    validateInput(event) {

        console.log(event);
        switch(event.target.id) {
            case "contactLastName":
                this.setState({lastName: event.target.value});
                break;
            case "contactFirstName":
                this.setState({firstName: event.target.value});
                break;
            case "contactPhone":
                this.setState({phone: event.target.value});
                break;
            case "contactEmail":
                this.setState({email: event.target.value});
                break;
            case "contactBirthday":
                this.setState({birthday: event.target.value});
                break;
            case "contactMaritalStatus":
                this.setState({maritalStatus: !this.state.maritalStatus});
                break;
            default:
                console.log("There was an error in your input");
            
        }

    }

    updateSpouse(event) {

        event.preventDefault();
        console.log(this.state.maritalStatus);
        this.setState({ maritalStatus: !this.state.maritalStatus });
        
    }

    buttonHandler() {
        console.log("Last Name: " + this.state.lastName);
        console.log("First Name: "  + this.state.firstName);
    }

    render () {
        let spouse;
        if (this.state.maritalStatus) {
            spouse = (
                <div className='contact-spouse-container'>
                    <p className="spouse-label">Spouse</p>
                    <div className="form-field">

                        <input
                        id="spouseFirstName" 
                        className='text-input form-input'
                        type="text"
                        name='spouseName'
                        onChange={(event) => this.validateInput(event)}
                        value={this.state.firstName}
                        placeholder='Spouse First Name'
                        />

                    </div>

                    <div className="form-field">

                        <input 
                        id="spousePhone" 
                        className='text-input form-input'
                        type="tel"
                        name="spousePhone"
                        placeholder='Spouse Pbone Number'
                        value={this.state.phone}
                        onChange={(event) => this.validateInput(event)}
                        />

                    </div>

                    <div className="form-field">

                        <input 
                        id="spouseEmail" 
                        className='text-input form-input'
                        type="email"
                        name="spouseEmail"
                        placeholder='Spouse Email'
                        value={this.state.email}
                        onChange={(event) => this.validateInput(event)}
                        />
                        
                    </div>

                    <div className="form-field">

                        <input 
                        id="spouseBirthday" 
                        className='date-input form-input'
                        type="date"
                        name="spouseBirthday"
                        value={this.state.birthday}
                        onChange={(event) => this.validateInput(event)}
                        />

                    </div>

                </div>
            )
        }
        return(
            <div className="contact-container">
                <div className="form form-new form-new-contact">
                    
                    <div className="form-field">

                        <input
                        id="contactLastName" 
                        className='text-input form-input'
                        type="text"
                        name='lastName'
                        onChange={(event) => this.validateInput(event)}
                        value={this.state.lastName}
                        placeholder='Last Name'
                        autoFocus
                        required
                        />

                    </div>

                    <div className="form-field">

                        <input
                        id="contactFirstName" 
                        className='text-input form-input'
                        type="text"
                        name='firstName'
                        onChange={(event) => this.validateInput(event)}
                        value={this.state.firstName}
                        placeholder='First Name'
                        required
                        />

                    </div>

                    <div className="form-field">

                        <input 
                        id="contactPhone" 
                        className='text-input form-input'
                        type="tel"
                        name="phone"
                        placeholder='Pbone Number'
                        value={this.state.phone}
                        onChange={(event) => this.validateInput(event)}
                        required
                        />

                    </div>

                    <div className="form-field">

                        <input 
                        id="contactEmail" 
                        className='text-input form-input'
                        type="email"
                        name="email"
                        placeholder='Email'
                        value={this.state.email}
                        onChange={(event) => this.validateInput(event)}
                        required
                        />

                    </div>
                    
                    <div className="form-field">

                        <input 
                        id="contactBirthday" 
                        className='date-input form-input'
                        type="date"
                        name="birthday"
                        value={this.state.birthday}
                        onChange={(event) => this.validateInput(event)}
                        required
                        />
                        
                    </div>

                    <div className="form-field">

                        <a className='btn btn-update' onClick={(e) => this.updateSpouse(e)}>{ this.state.maritalStatus ? "Remove Spouse" : "Add Spouse" }</a>

                    </div>

                    <div className="form-field">

                        <a className='btn btn-update' onClick={this.addChild}>Add Child</a>

                    </div>

                    <div className="form-field">

                        <a className='btn btn-save' onClick={this.saveContact}>Save Contact</a>

                    </div>

                    {spouse}



                </div>

            </div>
        )
    }
}

export default NewContact;