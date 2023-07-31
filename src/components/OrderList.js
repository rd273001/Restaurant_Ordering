import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const { width, height } = "100%"; 
const OrderListScreen = ( { navigation } ) => {
    const [orders, setOrders] = useState( [
        // Sample data for demonstration, you can replace this with your actual data
        {
            id: 1,
            customerName: "Ravi Dubey",
            phone: "700746XXXX",
            tableId: "Table 1",
            dishes: ["Burger", "Fries", "Soda"],
            completed: false,
        },
        {
            id: 2,
            customerName: "Abc Sharma",
            phone: "712796XXXX",
            tableId: "Table 2",
            dishes: ["Burger", "French Fries", "Soda", "Coffee"],
            completed: false,
        },
        {
            id: 3,
            customerName: "Xyz Patel",
            phone: "702346XXXX",
            tableId: "Table 3",
            dishes: ["Burger", "French Fries", "Soda"],
            completed: false,
        },
        {
            id: 4,
            customerName: "Abc Jaiswal",
            phone: "70234XXXXX",
            tableId: "Table 4",
            dishes: ["Burger", "French Fries", "Soda"],
            completed: false,
        },
        // Add more sample orders here if needed
    ] );

    // Function to handle marking an order as completed or not
    const handleOrderCompletion = ( orderId ) => {
        // Map through the orders array to find the order with the matching ID
        const updatedOrders = orders.map( ( order ) =>
            order.id === orderId ? { ...order, completed: !order.completed } : order
        );
        setOrders( updatedOrders ); // Update the orders list with the updated order status
    };

    // Function to handle deleting an order
    const handleDeleteOrder = ( orderId ) => {
        // Filter out the order with the specified ID to remove it from the list
        const filteredOrders = orders.filter( ( order ) => order.id !== orderId );
        setOrders( filteredOrders ); // Update the orders list without the deleted order
    };

    const renderItem = ( { item } ) => {
        // Show the delete button only for active (not completed) orders
        const deleteButton = !item.completed ? (
            <TouchableOpacity onPress={ () => handleDeleteOrder( item.id ) }>
                <Text style={ styles.actionButton }>Delete</Text>
            </TouchableOpacity>
        ) : null;

        // Checkbox to mark an order as completed or not
        const completionCheckbox = (
            <TouchableOpacity onPress={ () => handleOrderCompletion( item.id ) }>
                <Text style={ styles.actionButton }>
                    { item.completed ? "Completed" : "Mark as Completed" }
                </Text>
            </TouchableOpacity>
        );

        return (
            <View style={ styles.orderItem }>
                <Text style={ styles.customerName }>{ item.customerName }</Text>
                <Text style={ styles.tableId }>{ item.tableId }</Text>
                {/* Display the list of dishes */ }
                { item.dishes.map( ( dish, index ) => (
                    <Text key={ index } style={ styles.dish }>
                        { dish }
                    </Text>
                ) ) }
                <View style={ styles.actionContainer }>
                    { deleteButton }
                    { completionCheckbox }
                </View>
            </View>
        );
    };

    return (
        <View style={ styles.container }>
            <FlatList
                data={ orders }
                renderItem={ renderItem }
                keyExtractor={ ( item ) => item.id.toString() }
                contentContainerStyle={ styles.listContainer }
            />
            <TouchableOpacity
                style={ styles.addButton }
                onPress={ () => navigation.navigate( "AddOrder" ) }
            >
                <Text style={ styles.addButtonText }>+ Add Order</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 16,
    },
    listContainer: {
        paddingHorizontal: 16,
        paddingBottom: 80, // giving space for the "Add Order" button
    },
    orderItem: {
        marginBottom: 16,
        padding: 10,
        backgroundColor: "#00000033",
        borderRadius: 15,
    },
    customerName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 4,
    },
    tableId: {
        color: "#2C2C2C",
    },
    dish: {
        marginBottom: 4,
        color: "#000"
    },
    actionContainer: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    actionButton: {
        color: "blue",
        textDecorationLine: "underline",
    },
    addButton: {
        position: "absolute",
        bottom: 40,
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

export default OrderListScreen;