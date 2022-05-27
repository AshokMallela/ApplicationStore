

const BackEnd = (props) => {

    const { appDetails, change1, isActive } = props
    const { imageUrl, appId, appName } = appDetails



    const update = () => {

        change1(appName)


    }

    return (


        <div>
            <img src={imageUrl} alt={`im${appId}`} key={appId} className="image" />

            <button type="button" onClick={update} className={isActive ? "activeB" : "button"}>{appName}</button>
        </div >



    )
}



export default BackEnd