import React from 'react'

const IpInfo = () => {
    return (
        <section class="ip-info">
            <div className="card ip-address">
                <div className="card-title">IP Address</div>
                <div className="card-info">{ip}</div>
            </div>
            <div className="card location">
                <div className="card-title">Location</div>
                <div className="card-info">{location}</div>
            </div>
            <div class="card timezone">
                <div className="card-title">Timezone</div>
                <div className="card-info">{timezone}</div>
            </div>
            <div className="card isp">
                <div className="card-title">Isp</div>
                <div className="card-info">{isp}</div>
            </div>
        </section>
    )
}

export default IpInfo
