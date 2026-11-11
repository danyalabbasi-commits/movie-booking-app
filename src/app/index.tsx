import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { db } from "../../firebaseConfig";

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [userId, setUserId] = useState('');
  const [output, setOutput] = useState('');

  // 1. CREATE (Add Data)
  const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name: name,
        email: "danyalabbasi5445@gmail.com",
        age: Number(age)
      });
      setOutput("User added with ID: " + docRef.id);
    } catch (e: any) {
      setOutput("Error adding document: " + e.message);
    }
  };

  // 2. READ (Fetch Data)
  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      let resultStr = "";
      querySnapshot.forEach((doc) => {
        resultStr += `${doc.id} => ${JSON.stringify(doc.data())}\n`;
      });
      setOutput(resultStr || "No users found.");
    } catch (e: any) {
      setOutput("Error reading documents: " + e.message);
    }
  };

  // 3. UPDATE (Modify Data)
  const updateData = async () => {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        age: Number(age)
      });
      setOutput("User updated successfully!");
    } catch (e: any) {
      setOutput("Error updating document: " + e.message);
    }
  };

  // 4. DELETE (Remove Data)
  const deleteData = async () => {
    try {
      await deleteDoc(doc(db, "users", userId));
      setOutput("User deleted successfully!");
    } catch (e: any) {
      setOutput("Error deleting document: " + e.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Firebase CRUD App</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Enter Name" 
        value={name} 
        onChangeText={setName} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Enter Age" 
        value={age} 
        onChangeText={setAge} 
        keyboardType="numeric"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Enter User ID (for Update/Delete)" 
        value={userId} 
        onChangeText={setUserId} 
      />

      <View style={styles.buttonContainer}>
        <Button title="Add User (Create)" onPress={addData} />
        <Button title="Get Users (Read)" onPress={getData} />
        <Button title="Update User (Update)" onPress={updateData} />
        <Button title="Delete User (Delete)" onPress={deleteData} />
      </View>

      <Text style={styles.outputTitle}>Output / Console:</Text>
      <Text style={styles.output}>{output}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 40, backgroundColor: '#fff', alignItems: 'center', flexGrow: 1 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, marginTop: 40 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5, width: 250 },
  buttonContainer: { width: 250, gap: 10, marginVertical: 10 },
  outputTitle: { fontWeight: 'bold', marginTop: 20 },
  output: { marginTop: 10, color: 'blue', textAlign: 'center' }
});