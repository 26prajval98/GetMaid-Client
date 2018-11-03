import React from 'react'

export default function NotFound() {
    return (
        <div>
            <h1 className="w3-xlarge">
                <span className="w3-text-red">Error 404</span><br/>
                <span className="w3-jumbo">Page Not Found</span>
                <br />
                Or
                <br />
                <span className="w3-jumbo">Not Authenticated To Use This Page</span>
            </h1>
        </div>
    )
}
