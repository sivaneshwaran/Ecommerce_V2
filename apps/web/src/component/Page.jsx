import Side_bar from './Side_bar.jsx'
import Content from './Content.jsx'

function Page(){
    return(
        <div className="page d-flex justify-content-center">
            <Side_bar />
            <Content />
        </div>
    )
}
export default Page;