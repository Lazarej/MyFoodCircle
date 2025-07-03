import StepTab from "@/components/auth/stepTab";
import Step1 from "../../components/auth/step1";
import Step2 from "../../components/auth/step2";
import Step3 from "../../components/auth/step3";
import DefaultView from "@/components/global/defaultView";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MD3Theme, Text, useTheme } from "react-native-paper";
import { router, Stack } from "expo-router";
import Ionicons from "@expo/vector-icons/build/Ionicons";

export default function ResetPassword() {
  const theme = useTheme();
  const style = styles(theme);
  const [step, setStep] = useState(1);

  return (
    
      <DefaultView color={theme.colors.surface}>

        <StepTab step={step} />
    {step === 1 &&  <Step1 onNext={() => setStep(2)} />} 
    {step === 2 && <Step2 onNext={() => setStep(3)} />}
    {step === 3 && <Step3 onNext={() => setStep(3)} />}
  </DefaultView>
    
    
    
  );
}

const styles = (theme: MD3Theme) => StyleSheet.create({});
