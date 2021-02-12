import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Styles from './styles';
import * as yup from 'yup';
import { Formik } from 'formik';
import { Button, Checkbox } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../constants';
import { connect, ConnectedProps } from 'react-redux';
import { Snackbar } from 'react-native-paper';
import { AppState } from '../../redux/reducer';
import { createCustomer } from '../register/redux/actionCreators/createCustomer';
import Customer from '../../types/Customer';

const mapState = (state: AppState) => ({
  createCustomerResponse: state.createCustomer.createCustomerResponseReducer.customerInfo,
});

const mapDispatch = {
  createCustomer: (customer) => createCustomer(customer),
};

const connector = connect(mapState, mapDispatch);

const validationSchema = yup.object().shape({
  firstName: yup.string().label('firstName').required('First Name is required'),
  lastName: yup.string().label('lastName').required('Last Name is required'),
  email: yup.string().label('email').email('Invalid Email').required('Email is required'),
  mobile: yup.string().label('mobile').required('Mobile Number is required'),
  password: yup
    .string()
    .label('password')
    .required('Password is required')
    .min(5, 'The password must be more than 5 characters.'),
  confirmPassword: yup
    .string()
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value;
    })
    .required('Confirm Password is required'),
});
type PropsFromRedux = ConnectedProps<typeof connector>;
const Header: React.FC<PropsFromRedux> = (props: PropsFromRedux) => {
  const { createCustomerResponse } = props;
  // console.log('careted user', createCustomerResponse)

  const [checked, setChecked] = React.useState(false);
  const navigation = useNavigation();
  const logIn = () => {
    navigation.navigate(ScreenNames.LoginScreen);
  };

  const saveCreateCUstomer = (values) => {
    let customer: Customer = {
      email: values.email,
      first_name: values.firstName,
      last_name: values.lastName,
      username: values.firstName + '.' + values.lastName,
      password: values.password,
    };
    props.createCustomer(customer);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={(values) => {
            saveCreateCUstomer(values);
          }}
          validationSchema={validationSchema}
        >
          {(formikProps) => (
            <React.Fragment>
              <View style={Styles.mainContainer}>
                <Image
                  source={{ uri: 'https://dummyimage.com/600X600/C4C4C4/ffffff.png' }}
                  style={Styles.logoStyle}
                />
                <View style={Styles.container}>
                  <View style={Styles.loginContainer}>
                    <TextInput
                      defaultValue={formikProps.values.firstName}
                      placeholder="First Name"
                      style={[Styles.inputLabel, Styles.textStyle]}
                      keyboardType="name-phone-pad"
                      onChangeText={formikProps.handleChange('firstName')}
                      onBlur={formikProps.handleBlur('firstName')}
                    />
                    <Text style={Styles.formErrorMessage}>
                      {formikProps.touched.firstName && formikProps.errors.firstName}
                    </Text>
                    <TextInput
                      defaultValue={formikProps.values.lastName}
                      placeholder="Last Name"
                      style={[Styles.inputLabel, Styles.textStyle]}
                      keyboardType="name-phone-pad"
                      onChangeText={formikProps.handleChange('lastName')}
                      onBlur={formikProps.handleBlur('lastName')}
                    />
                    <Text style={Styles.formErrorMessage}>
                      {formikProps.touched.lastName && formikProps.errors.lastName}
                    </Text>
                    <TextInput
                      defaultValue={formikProps.values.email}
                      placeholder="Email address"
                      style={[Styles.inputLabel, Styles.textStyle]}
                      keyboardType="email-address"
                      onChangeText={formikProps.handleChange('email')}
                      onBlur={formikProps.handleBlur('email')}
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                    <Text style={Styles.formErrorMessage}>
                      {formikProps.touched.email && formikProps.errors.email}
                    </Text>
                    <TextInput
                      defaultValue={formikProps.values.mobile}
                      placeholder="Mobile"
                      style={[Styles.inputLabel, Styles.textStyle]}
                      keyboardType="number-pad"
                      onChangeText={formikProps.handleChange('mobile')}
                      onBlur={formikProps.handleBlur('mobile')}
                    />
                    <Text style={Styles.formErrorMessage}>
                      {formikProps.touched.mobile && formikProps.errors.mobile}
                    </Text>
                    <TextInput
                      secureTextEntry={true}
                      placeholder="Password"
                      value={formikProps.values.password}
                      style={[Styles.inputLabel, Styles.textStyle]}
                      onChangeText={formikProps.handleChange('password')}
                      maxLength={120}
                      onBlur={formikProps.handleBlur('password')}
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                    <Text style={Styles.formErrorMessage}>
                      {formikProps.touched.password && formikProps.errors.password}
                    </Text>
                    <TextInput
                      secureTextEntry={true}
                      placeholder="Confirm Password"
                      value={formikProps.values.confirmPassword}
                      style={[Styles.inputLabel, Styles.textStyle]}
                      onChangeText={formikProps.handleChange('confirmPassword')}
                      maxLength={120}
                      onBlur={formikProps.handleBlur('confirmPassword')}
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                    <Text style={Styles.formErrorMessage}>
                      {formikProps.touched.confirmPassword && formikProps.errors.confirmPassword}
                    </Text>
                  </View>
                  <View style={Styles.termsView}>
                    <Checkbox
                      status={checked ? 'checked' : 'unchecked'}
                      onPress={() => {
                        setChecked(!checked);
                      }}
                      color={'#000000'}
                    />
                    <Text style={Styles.textStyle}> Agree with </Text>
                    <TouchableOpacity>
                      <Text style={Styles.termsTextStyle} onPress={() => console.log('Hi')}>
                        terms and conditions
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {checked ? (
                    <Button
                      color="#fff"
                      onPress={formikProps.handleSubmit}
                      mode="contained"
                      labelStyle={Styles.nextButtonText}
                      style={Styles.nextButtonContainer}
                    >
                      Create Account
                    </Button>
                  ) : (
                    <Button
                      color="#fff"
                      onPress={formikProps.handleSubmit}
                      mode="contained"
                      labelStyle={Styles.nextButtonText}
                      style={Styles.buttonDisableContainer}
                      disabled={true}
                    >
                      Create Account
                    </Button>
                  )}

                  <View style={Styles.bottomView}>
                    <View style={Styles.loginView}>
                      <Text style={Styles.loginTextStyle}>Already have an account? </Text>
                      <TouchableOpacity>
                        <Text style={Styles.loginStyle} onPress={() => logIn()}>
                          Log in
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </React.Fragment>
          )}
        </Formik>
      </ScrollView>
      {createCustomerResponse !== null ? (
        <View style={Styles.snackbarContainer}>
          <Snackbar
            visible={true}
            onDismiss={() => console.log('dismiss')}
            action={{
              label: 'Log In ',
              onPress: () => {
                navigation.navigate(ScreenNames.LoginScreen);
              },
            }}
            duration={Snackbar.DURATION_MEDIUM}
          >
            Congratulations, your account has been successfully created.
          </Snackbar>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default connector(Header);
