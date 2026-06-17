# 🏠 Bangalore House Price Prediction

A Machine Learning web application that predicts house prices in Bangalore based on property features such as area, BHK, bathrooms, and location.

The project uses a trained Linear Regression model, Flask backend API, and a modern HTML/CSS/JavaScript frontend.

---

# 🚀 Features

* Predict Bangalore house prices instantly
* Interactive and responsive UI
* Dynamic location dropdown
* Machine Learning model trained on Bangalore housing dataset
* Flask REST API backend
* Modern Glassmorphism frontend design
* Real-time predictions

---

# 📊 Dataset

The dataset contains Bangalore housing information including:

* Location
* Total Square Feet
* Number of Bedrooms (BHK)
* Number of Bathrooms
* Price

Data cleaning steps:

* Removed null values
* Converted sqft ranges into numeric values
* Feature engineering
* Outlier detection and removal
* One-hot encoding for locations

---

# 🛠️ Technologies Used

### Backend

* Python
* Flask
* NumPy
* Pandas
* Scikit-Learn
* Pickle

### Frontend

* HTML5
* CSS3
* JavaScript
* jQuery

### Machine Learning

* Linear Regression
* GridSearchCV
* Cross Validation

---

# 📁 Project Structure

```text
ESTATE_PREDICTION/
│
├── client/
│   ├── app.html
│   ├── app.css
│   └── app.js
│
├── server/
│   ├── server.py
│   ├── util.py
│   └── artifact/
│       ├── columns.json
│       └── banglore_home_prices_model.pickle
│
├── model/
│   ├── Bangalore_House_Price.ipynb
│   ├── columns.json
│   └── banglore_home_prices_model.pickle
│
├── requirements.txt
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/your-username/bangalore-house-price-prediction.git

cd bangalore-house-price-prediction
```

---

## Create Virtual Environment

```bash
python -m venv venv
```

Activate:

### Windows

```bash
venv\Scripts\activate
```

### Linux/Mac

```bash
source venv/bin/activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

# ▶️ Run Flask Server

Move to server folder:

```bash
cd server
```

Run:

```bash
python server.py
```

Output:

```text
Starting Python Flask Server...
Loading saved artifacts...
Artifacts loaded successfully

* Running on http://127.0.0.1:5000
```

---

# 🌐 Run Frontend

Open:

```text
client/app.html
```

or use VS Code Live Server.

---

# 🔌 API Endpoints

## Get Locations

### Request

```http
GET /get_location_names
```

### Response

```json
{
  "locations": [
    "1st block jayanagar",
    "whitefield",
    "electronic city"
  ]
}
```

---

## Predict House Price

### Request

```http
POST /predict_home_price
```

### Parameters

```json
{
  "total_sqft": 1000,
  "bhk": 2,
  "bath": 2,
  "location": "1st block jayanagar"
}
```

### Response

```json
{
  "estimated_price": 68.57
}
```

---

# 📈 Model Performance

Model Used:

```text
Linear Regression
```

Evaluation:

```text
Cross Validation
GridSearchCV
ShuffleSplit
```

Achieved strong prediction accuracy after:

* Feature Engineering
* Outlier Removal
* Location Encoding

---

# 📸 Application Preview

### Input

```text
Area: 1000 sqft
BHK: 2
Bathrooms: 2
Location: 7th Phase JP Nagar
```

### Output

```text
₹ 68.57 Lakhs
```

---

# 🔮 Future Improvements

* Deploy on Render
* Deploy Frontend on Vercel
* User Authentication
* Price Trend Visualization
* Location Map Integration
* Deep Learning Model Comparison
* Mobile App Version
* Streamlit Dashboard

---

# 👨‍💻 Author

**S. Vasanth**

Aspiring Data Scientist & Machine Learning Engineer

Skills:

* Python
* Machine Learning
* Deep Learning
* Flask
* SQL
* Data Science
* Pandas
* NumPy
* Scikit-Learn

---

# ⭐ If you like this project

Give it a star on GitHub and share it with others.

```text
Made with ❤️ using Python, Machine Learning, and Flask
```
