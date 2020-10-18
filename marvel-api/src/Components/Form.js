import React from 'react'

export default function(props) {
    // Props
    const { values, change, submit } = props
    // Event Change
    const onChange = evt => {
        const { name, value } = evt.target
        change(name, value)
    }
    // Event Submit
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form className="form-container" onSubmit={onSubmit}>
            <div className="Form">
                <h2>Form</h2>
                
                <label>Name
                    <input 
                        name="name" 
                        type="text" 
                        placeholder="name" 
                        value={values.name}
                        onChange={onChange}
                    />
                </label>

                <label>Description
                    <input 
                        name="description" 
                        type="text" 
                        placeholder="description" 
                        value={values.description}
                        onChange={onChange}
                    />
                </label>

                <button className="subBtn">submit</button>
            </div>
        </form>
    )
}
