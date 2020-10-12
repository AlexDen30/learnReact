import React from 'react';


class ProfileStatus extends React.Component {

    state = {
        editMod: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMod: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMod: false
        });

        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
        
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

        console.log('componentDidUpdate');
    }

    render() {
        return (
            <div>
                {!this.state.editMod
                    ?
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{!this.props.status ? 'no status' : this.props.status}</span>
                    </div>
                    :
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}></input>
                    </div>
                }


            </div>
        );
    }

}


export default ProfileStatus;