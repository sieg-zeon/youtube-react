import React, {useContext} from 'react'
import { Store } from '../../store/index'
import SideListItem from '../SideListItem/SideListItem'

const SideList = () => {
    const { globalState } = useContext(Store)
    // const SetRelatedVideo = async (id) => {
    //     await fetchRelatedData(id).then((res) => {
    //         setGlobalState({ type: 'SET_RELATED', payload: { related: res.data.items } })
    //     })
    // }
    // useEffect(() => {
    //     SetRelatedVideo(globalState.selected.id)
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [globalState.selected])
    return (
        <div>
            {
                globalState.related ? globalState.related.map((video) => {
                    return (
                        <SideListItem
                            id={video.id.videoId}
                            key={video.id.videoId}
                            src={video.snippet.thumbnails.medium.url}
                            title={video.snippet.title}
                        />
                    )
                }) : <span>no data</span>
            }
        </div>
    )
}

export default SideList
