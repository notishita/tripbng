import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
  StatusBar,
  Modal,
  Pressable,
  Platform,
} from 'react-native';
import styles from './style';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const AddAdultScreen = ({ navigation }) => {
  const [gender, setGender] = useState('male');
  const [photoUri, setPhotoUri] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState('VIKAS');
  const [lastName, setLastName] = useState('DETROJA');
  const [email, setEmail] = useState('Email');
  const [mobile, setMobile] = useState('+91 99988 77777');

  // Pick from gallery
  const pickFromGallery = () => {
    setShowModal(false);
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (response.didCancel || response.errorCode) return;
      setPhotoUri(response.assets?.[0]?.uri);
    });
  };

  // Take photo
  const takePhoto = () => {
    setShowModal(false);
    launchCamera({ mediaType: 'photo' }, response => {
      if (response.didCancel || response.errorCode) return;
      setPhotoUri(response.assets?.[0]?.uri);
    });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation?.goBack?.()}>
            <View style={styles.backButton}>
              <Text style={{ fontSize: 28 }}>←</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add New Adult</Text>
        </View>

        {/* Scan Box */}
        <View style={styles.scanBox}>
          <View style={styles.scanIcon}>
            {/* Simulate icon */}
            <Image
              source={require('../../../../Assets/Images/Icons/ScanFace.png')}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.scanTitle}>Scan to auto-fill this form!</Text>
            <Text style={styles.scanDesc}>
              Fetch details from your passport
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.scanBtn}>SCAN</Text>
          </TouchableOpacity>
        </View>

        {/* Form Card */}
        <View style={styles.formCard}>
          {/* Gender */}
          <Text style={styles.label}>Gender</Text>
          <View style={styles.genderRow}>
            <TouchableOpacity
              style={[
                styles.genderBtn,
                gender === 'male' && styles.genderBtnActive,
              ]}
              onPress={() => setGender('male')}
            >
              <Text
                style={[
                  styles.genderText,
                  gender === 'male' && styles.genderTextActive,
                ]}
              >
                MALE
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.genderBtn,
                gender === 'female' && styles.genderBtnActive,
              ]}
              onPress={() => setGender('female')}
            >
              <Text
                style={[
                  styles.genderText,
                  gender === 'female' && styles.genderTextActive,
                ]}
              >
                FEMALE
              </Text>
            </TouchableOpacity>
          </View>

          {/* Name Fields */}
          <Text style={styles.fieldLabel}>NAME</Text>
          <TextInput
            style={styles.input}
            // value={firstName}
            placeholder='First Name'
            onChangeText={setFirstName}
          />
          <Text style={styles.fieldLabel}>LAST NAME</Text>
          <TextInput
            style={styles.input}
            // value={lastName}
            placeholder='Last Name'
            onChangeText={setLastName}
          />

          {/* Contact Info */}
          <Text style={styles.contactTitle}>Contact Information</Text>
          <Text style={styles.fieldLabel}>Email</Text>
          <TextInput
            style={styles.input}
            // value={email}
            placeholder='Email'
            onChangeText={setEmail}
          />
          <Text style={styles.fieldLabel}>Mobile No.</Text>
          <TextInput
            style={styles.input}
            // value={mobile}
            placeholder='+91 0000000000'
            onChangeText={setMobile}
          />
        </View>

        {/* Add Photo */}
        <TouchableOpacity
          style={styles.photoBox}
          onPress={() => setShowModal(true)}
        >
          {photoUri ? (
            <Image source={{ uri: photoUri }} style={styles.photoPreview} />
          ) : (
            <Text style={styles.photoText}>Add Photo</Text>
          )}
        </TouchableOpacity>

        {/* Modal for photo options */}
        <Modal
          visible={showModal}
          transparent
          animationType="fade"
          onRequestClose={() => setShowModal(false)}
        >
          <Pressable style={styles.modalBG} onPress={() => setShowModal(false)}>
            <View style={styles.modalSheet}>
              <TouchableOpacity
                style={styles.modalBtn}
                onPress={pickFromGallery}
              >
                <Text style={styles.modalBtnText}>Import from Gallery</Text>
              </TouchableOpacity>
              <View style={styles.divider} />
              <TouchableOpacity style={styles.modalBtn} onPress={takePhoto}>
                <Text style={styles.modalBtnText}>Take a Photo</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalCancel}
                onPress={() => setShowModal(false)}
              >
                <Text style={styles.modalCancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Modal>

        {/* Confirm Button */}
        <TouchableOpacity
          style={styles.confirmBtn}
          onPress={() => navigation.navigate('FlightBookDetails')}
        >
          <Text style={styles.confirmText}>CONFIRM</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddAdultScreen;
