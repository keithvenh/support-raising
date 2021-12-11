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
            maritalStatus: true,
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
        this.buttonHandler = this.buttonHandler.bind(this);
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

    buttonHandler() {
        console.log("Last Name: " + this.state.lastName);
        console.log("First Name: "  + this.state.firstName);
    }

    render () {
        let spouse;
        if (this.state.maritalStatus) {
            spouse = (
                <div className='contact-spouse-container'>
                    <input
                    id="spouseFirstName" 
                    className='text-input'
                    type="text"
                    name='spouseName'
                    onChange={(event) => this.validateInput(event)}
                    value={this.state.firstName}
                    placeholder='First Name'
                    required
                    />


                    <input 
                    id="spousePhone" 
                    className='text-input'
                    type="tel"
                    name="spousePhone"
                    placeholder='Pbone Number'
                    value={this.state.phone}
                    onChange={(event) => this.validateInput(event)}
                    required
                    />

                    <input 
                    id="spouseEmail" 
                    className='text-input'
                    type="email"
                    name="spouseEmail"
                    placeholder='Email'
                    value={this.state.email}
                    onChange={(event) => this.validateInput(event)}
                    required
                    />

                    <input 
                    id="spouseBirthday" 
                    className='text-input'
                    type="date"
                    name="spouseBirthday"
                    value={this.state.birthday}
                    onChange={(event) => this.validateInput(event)}
                    required
                    />
                </div>
            )
        }
        return(
            <div className="contact-container">
                <input
                id="contactLastName" 
                className='text-input'
                type="text"
                name='lastName'
                onChange={(event) => this.validateInput(event)}
                value={this.state.lastName}
                placeholder='Last Name'
                autoFocus
                required
                />

                <input
                id="contactFirstName" 
                className='text-input'
                type="text"
                name='firstName'
                onChange={(event) => this.validateInput(event)}
                value={this.state.firstName}
                placeholder='First Name'
                required
                />


                <input 
                id="contactPhone" 
                className='text-input'
                type="tel"
                name="phone"
                placeholder='Pbone Number'
                value={this.state.phone}
                onChange={(event) => this.validateInput(event)}
                required
                />

                <input 
                id="contactEmail" 
                className='text-input'
                type="email"
                name="email"
                placeholder='Email'
                value={this.state.email}
                onChange={(event) => this.validateInput(event)}
                required
                />

                <input 
                id="contactBirthday" 
                className='text-input'
                type="date"
                name="birthday"
                value={this.state.birthday}
                onChange={(event) => this.validateInput(event)}
                required
                />

                <input 
                id="contactMaritalStatus" 
                className='text-input'
                type="checkbox"
                name="maritalStatus"
                value={this.state.maritalStatus}
                checked={this.state.maritalStatus ? true : false}
                onChange={(event) => this.validateInput(event)}
                required
                />

                {spouse}

                <button className='btn btn-submit' onClick={this.buttonHandler}>Roll</button>
            </div>
        )
    }
}

export default NewContact;