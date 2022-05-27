

const Database = (props) => {

    const { appDetails, change2, isActive } = props
    const { imageUrl, appId, appName } = appDetails



    const update = () => {

        change2(appName)


    }

    return (


        <div>
            <img src={imageUrl} alt={`im${appId}`} key={appId} className="image" />

            <button type="button" onClick={update} className={isActive ? "activeB" : "button"}>{appName}</button>
        </div >



    )
}

export default Database