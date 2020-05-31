import React from "react";

export default React.memo(({type, placeholder, name, validation, register, error}) => {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                ref={register(validation)}
            />
            {error[name] && <span className="">{error[name].message}</span>}
        </>
    )
});
