
import "./index.css"



const FrontEnd = (props) => {

    const { appDetails, change, isActive } = props
    const { imageUrl, appId, appName } = appDetails



    const update = () => {

        change(appName)


    }

    return (


        <div>
            <img src={imageUrl} alt={`im${appId}`} key={appId} className="image" />

            <button type="button" onClick={update} className={isActive ? "activeB" : "button"}>{appName}</button>
        </div >



    )
}

export default FrontEnd