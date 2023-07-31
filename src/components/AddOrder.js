import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet } from "react-native";


const AddOrderScreen = ( { navigation } ) => {
    const [customerName, setCustomerName] = useState( "" );
    const [phone, setPhone] = useState( "" );
    const [tableId, setTableId] = useState( "" );
    const [dishes, setDishes] = useState( [] );
    const [error, setError] = useState( "" );

    const addOrder = () => {
        // Form validation
        if ( !customerName.trim() || !phone.trim() || !tableId.trim() || !dishes.length ) {
            setError( "Please fill in all fields." );
            return;
        }
        
        setError( "" ); // Clear the error message

        // Create a new order object based on user input
        const newOrder = {
            id: Date.now(), // Generate a unique ID using the current timestamp
            customerName,
            phone,
            tableId,
            dishes,
            completed: false, // Initially, the order is not completed
        };

        // Call the onAddOrder function passed as a prop to add the order to the list
        navigation.goBack(); // Go back to the previous screen after adding the order
    };

    return (
        <SafeAreaView style={ styles.container }>
            <ScrollView>
                <View style={ styles.formContainer }>
                    <Text style={ styles.label }>Customer Name</Text>
                    <TextInput
                        style={ styles.input }
                        value={ customerName }
                        onChangeText={ setCustomerName }
                        placeholder="Enter customer name"
                    />

                    <Text style={ styles.label }>Phone</Text>
                    <TextInput
                        style={ styles.input }
                        value={ phone }
                        onChangeText={ setPhone }
                        placeholder="Enter phone number"
                    />

                    <Text style={ styles.label }>Table ID</Text>
                    <TextInput
                        style={ styles.input }
                        value={ tableId }
                        onChangeText={ setTableId }
                        placeholder="Enter table ID"
                    />

                    <Text style={ styles.label }>Dishes</Text>
                    <TextInput
                        style={ styles.input }
                        value={ dishes.join( ", " ) }
                        onChangeText={ ( text ) => setDishes( text.split( ", " ) ) }
                        placeholder="Enter dishes separated by comma"
                    />
                    {/* for showing error if any input field is blank */}
                    { error ? <Text style={ styles.errorText }>{ error }</Text> : null }

                    <TouchableOpacity onPress={ addOrder } style={ styles.addButton } >
                        <Text style={ styles.addButtonText }>+  Add Order</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 16,
    },
    formContainer: {
        marginTop: 20,
    },
    label: {
        fontSize: 16,
        color: "#2C2C2C",
        fontWeight: "bold",
        marginBottom: 8,
    },
    input: {
        borderColor: "#999",
        borderWidth: 1,
        borderRadius: 8,
        padding: 8,
        marginBottom: 16,
    },
    errorText: {
        color: "red",
        marginBottom: 16,
    },
    addButton: {
        alignSelf: "center",
        borderWidth: 2,
        borderColor: "#b2b",
        backgroundColor: "#4C4C4C",
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 20,
        elevation: 4,
    },
    addButtonText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
    },
} );

export default AddOrderScreen;