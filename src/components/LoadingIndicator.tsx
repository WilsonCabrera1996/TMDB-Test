import { Loading02Icon } from "hugeicons-react"

export const LoadingIndicator = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
            <Loading02Icon className='animate-spin' color='orange' />
        </div>
    )
}