import { Redirect ,Slot } from 'expo-router'


export default function _Layout() {
    const isAuthenticated = false; // make it true for testing

    if(!isAuthenticated) return <Redirect href="/sing-in"/>;
    return <Slot />

}