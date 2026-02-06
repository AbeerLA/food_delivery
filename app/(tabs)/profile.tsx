import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Profile = () => {
    return (
        <View style={styles.container}>

            {/* Avatar */}
            <Image
                source={{ uri: 'https://i.pravatar.cc/300' }}
                style={styles.avatar}
            />

            {/* Name */}
            <Text style={styles.name}>Abeer</Text>
            <Text style={styles.email}>abeer@email.com</Text>

            {/* Info Card */}
            <View style={styles.card}>
                <View style={styles.row}>
                    <Text style={styles.label}>Orders</Text>
                    <Text style={styles.value}>12</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Favorites</Text>
                    <Text style={styles.value}>5</Text>
                </View>
            </View>

            {/* Buttons */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.logout]}>
                <Text style={[styles.buttonText, { color: '#fff' }]}>Logout</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 60,
        backgroundColor: '#F9F9F9',
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 15,
    },
    name: {
        fontSize: 22,
        fontWeight: '600',
    },
    email: {
        fontSize: 14,
        color: '#888',
        marginBottom: 20,
    },
    card: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
        elevation: 3,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 6,
    },
    label: {
        color: '#666',
    },
    value: {
        fontWeight: '600',
    },
    button: {
        width: '90%',
        padding: 15,
        borderRadius: 14,
        backgroundColor: '#eee',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        fontWeight: '600',
    },
    logout: {
        backgroundColor: '#FF9900',
    },
})
