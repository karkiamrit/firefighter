# <img src='./fighterlogo (1).png' height='80px' width='150px'/> Fire Fighter - Guardians of Green
Where Environmental Care Meets Innovation

## Home Page
<img src='./Screenshot (5).png' />


# Forest Fire Monitoring and Alert System Documentation

Welcome to the documentation for the Forest Fire Monitoring and Alert System. This system combines satellite-derived environmental data, machine learning (ML) predictions, and Internet of Things (IoT) sensors to provide real-time forest fire monitoring, risk assessment, and immediate alert notifications.

## Table of Contents

- [Key Features](#key-features)
  - [Environmental Data Processing](#environmental-data-processing)
  - [IoT Sensors Implementation](#iot-sensors-implementation)
  - [Alert Notification System](#alert-notification-system)
- [Environmental Data Processing](#environmental-data-processing-1)
  - [Input Data](#input-data)
  - [Machine Learning Model](#machine-learning-model)
- [IoT Sensors Implementation](#iot-sensors-implementation-1)
  - [Sensor Deployment](#sensor-deployment)
  - [Data Collection](#data-collection)
- [Alert Notification System](#alert-notification-system-1)
  - [Immediate Alerts](#immediate-alerts)
  - [Notification Channels](#notification-channels)
- [Sequence Flow: User Engagement and Alert Notification](#sequence-flow-user-engagement-and-alert-notification)
  - [Step 1: App/Website Access](#step-1-appwebsite-access)
  - [Step 2: Initial Location Access](#step-2-initial-location-access)
  - [Step 3: Home Screen](#step-3-home-screen)
  - [Step 4: Fire-Prone Areas Overview](#step-4-fire-prone-areas-overview)
  - [Step 5: Live Fire Locations](#step-5-live-fire-locations)
  - [Step 6: User Location Tracking](#step-6-user-location-tracking)
  - [Step 7: Proximity Alert](#step-7-proximity-alert)
  - [Additional Features (Side Features)](#additional-features-side-features)
- [Conclusion](#conclusion)

## Key Features

### Environmental Data Processing

- **Input Data:** Satellite-derived data including oxygen levels, humidity, and temperature.
- **Machine Learning Model:** Predicts the likelihood of a forest fire based on the environmental variables.

### IoT Sensors Implementation

- **Sensor Deployment:** Install IoT sensors strategically in fire-prone areas.
- **Data Collection:** Sensors continuously monitor on-ground conditions.

### Alert Notification System

- **Immediate Alerts:** If the ML model predicts a high risk of fire or if an actual fire is detected by sensors, immediate alerts are sent.
- **Notification Channels:** Alerts are sent to nearby residents via mobile apps, SMS, and other communication channels.

## Environmental Data Processing

### Input Data

The system utilizes satellite-derived environmental data, including oxygen levels, humidity, and temperature. This data serves as input for the ML model.

### Machine Learning Model

A robust ML model analyzes the environmental data to predict the likelihood of a forest fire. This model is trained on historical data to enhance predictive accuracy.

## IoT Sensors Implementation

### Sensor Deployment

IoT sensors are strategically deployed in areas identified as high-risk based on the ML predictions. These sensors continuously monitor on-ground conditions.

### Data Collection

The sensors collect real-time data on environmental variables such as temperature, humidity, and oxygen levels. In case of a significant change, the sensors trigger alerts.

## Alert Notification System

### Immediate Alerts

1. **ML Prediction Alerts:** If the ML model predicts a high likelihood of a forest fire based on satellite data, immediate alerts are generated.
2. **Sensor Detection Alerts:** When on-ground sensors detect an actual fire, immediate alerts are triggered.

### Notification Channels

Residents in the affected areas receive alerts through various channels:

- **Mobile Apps:** A dedicated mobile app provides real-time alerts.

## Sequence Flow: User Engagement and Alert Notification

### Step 1: App/Website Access

1. **User opens the Forest Fire Monitoring App or visits the website.**
   - No login is required for basic functionalities.

### Step 2: Initial Location Access

2. **First-time Location Access:**
   - If it's the user's first time accessing the app, the system requests permission to access the device's location.
   - Upon user approval, the app captures the user's location coordinates.

### Step 3: Home Screen

3. **Home Screen:**
   - The user is directed to the home screen displaying a map interface.

### Step 4: Fire-Prone Areas Overview

4. **View Fire-Prone Areas:**
   - The map highlights areas prone to fire based on satellite data and ML predictions.
   - Users can explore fire-prone regions without additional features.

### Step 5: Live Fire Locations

5. **Live Fire Display:**
   - The map also shows live fire locations in real-time, if available.

### Step 6: User Location Tracking

6. **Continuous Location Tracking:**
   - The app continuously tracks the user's location in the background.

### Step 7: Proximity Alert

7. **Proximity Alert:**
   - If the user's location is within a specified proximity to a live fire (configurable distance), an immediate alert is triggered.

### Additional Features (Side Features):

- **Custom Alerts:**
  - Users can set custom alert preferences based on different fire risk levels.
- **Educational Resources:**
  - Access to educational resources on fire prevention, safety measures, and evacuation plans.
- **Emergency Contacts:**
  - Emergency contact information is readily available.
- **Crowdfunding for NGOs:**
  - Users can contribute to NGOs involved in forest fire prevention and control.

## Conclusion

The Forest Fire Monitoring and Alert System seamlessly integrate satellite-derived data, machine learning, and IoT sensors to enhance forest fire prevention and response efforts. By providing accurate predictions and real-time alerts, the system contributes to early detection, minimizing the impact of forest fires on communities and the environment.
