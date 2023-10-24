export default function Location() {
    return (
        <div>
            <h1 style={{ color: "white", textAlign: "center",marginTop:"100px", fontSize: "30px" }}>My Office Street View Location</h1>
            <iframe
                src="https://www.google.com/maps/embed?pb=!4v1687276633385!6m8!1m7!1sB37MSl0KYlvstPuVwMs56Q!2m2!1d17.36794259255371!2d78.51505995185511!3f99.63174733084288!4f-3.8580451713867916!5f0.7820865974627469"
                width="600"
                height="450"
                style={{
                    border: "0",
                    width: "80%",
                    margin: "50px auto",
                    display: "block",
                    borderRadius: "1%"
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}