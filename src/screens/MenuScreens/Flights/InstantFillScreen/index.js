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
  ScrollView,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './style';

const AddNewInstantScreen = ({ navigation }) => {
  const [gender, setGender] = useState('male');
  const [photoUri1, setPhotoUri1] = useState(null);
  const [photoUri2, setPhotoUri2] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState(null); // Store as Date
  const [showDatePicker, setShowDatePicker] = useState(false);

  const formatDate = dateObj => {
    if (!dateObj) return '';
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Pick from gallery
  const pickFromGallery = () => {
    setShowModal(false);
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (response.didCancel || response.errorCode) return;
      const uri = response.assets?.[0]?.uri;
      if (currentPhoto === 1) setPhotoUri1(uri);
      else setPhotoUri2(uri);
    });
  };

  // Take photo
  const takePhoto = () => {
    setShowModal(false);
    launchCamera({ mediaType: 'photo' }, response => {
      if (response.didCancel || response.errorCode) return;
      const uri = response.assets?.[0]?.uri;
      if (currentPhoto === 1) setPhotoUri1(uri);
      else setPhotoUri2(uri);
    });
  };

  // Open picker for given slot
  const openPicker = num => {
    setCurrentPhoto(num);
    setShowModal(true);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.headerRow}>
            <TouchableOpacity onPress={() => navigation?.goBack?.()}>
              <View style={styles.backButton}>
                <Text style={{ fontSize: 28 }}>←</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Add New Instant</Text>
          </View>

          {/* Scan Box */}
          <View style={styles.scanBox}>
            <View style={styles.scanIcon}>
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
              placeholder="Name"
              placeholderTextColor="#888"
              value={firstName}
              onChangeText={setFirstName}
            />

            <Text style={styles.fieldLabel}>LAST NAME</Text>
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              placeholderTextColor="#888"
              value={lastName}
              onChangeText={setLastName}
            />

            <Text style={styles.fieldLabel}>DATE OF BIRTH</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <TextInput
                style={styles.input}
                placeholder="DD/MM/YYYY"
                placeholderTextColor="#888"
                value={dob ? formatDate(dob) : ''}
                editable={false} // Prevent keyboard, tap opens date picker
                pointerEvents="none" // For iOS
              />
            </TouchableOpacity>

            {showDatePicker && (
              <DateTimePicker
                value={dob || new Date(2000, 0, 1)} // default if dob not set
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  setShowDatePicker(Platform.OS === 'ios');
                  if (selectedDate) setDob(selectedDate);
                }}
                maximumDate={new Date()} // Optional: Can't pick future date
              />
            )}
          </View>

          {/* Add Photo Slots */}
          <TouchableOpacity
            style={styles.photoBox}
            onPress={() => openPicker(1)}
          >
            {photoUri1 ? (
              <Image source={{ uri: photoUri1 }} style={styles.photoPreview} />
            ) : (
              <Text style={styles.photoText}>Add Photo</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.photoBox}
            onPress={() => openPicker(2)}
          >
            {photoUri2 ? (
              <Image source={{ uri: photoUri2 }} style={styles.photoPreview} />
            ) : (
              <Text style={styles.photoText}>Add Photo</Text>
            )}
          </TouchableOpacity>

          {/* Confirm Button */}
          <TouchableOpacity
            style={styles.confirmBtn}
            onPress={() => navigation.navigate('FlightBookDetails')}
          >
            <Text style={styles.confirmText}>CONFIRM</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Modal for photo options */}
      <Modal
        visible={showModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <Pressable style={styles.modalBG} onPress={() => setShowModal(false)}>
          <View style={styles.modalSheet}>
            <TouchableOpacity style={styles.modalBtn} onPress={pickFromGallery}>
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
    </SafeAreaView>
  );
};

export default AddNewInstantScreen;
