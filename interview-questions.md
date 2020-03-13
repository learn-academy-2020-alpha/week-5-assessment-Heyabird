# ASSESSMENT 5: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own there is always something more to learn.   

1. Rails follows an MVC pattern. What does that mean?

  Your answer: Rails has layers of work inside it, and the work can be divided into three parts: Model (data), Views (display), and Controller (the logical center that retrieves data from Model and displays them on the server via Views)

  Researched answer:
  "The MVC architecture (which is at the core of Rails) aims at giving us a well-defined design pattern to build our app upon, already establishing all the layers and connections between them.
    - Model
    “Maintains the relationship between Object and Database and handles validation, association, transactions”
    - View
    “A presentation of data in a particular format, triggered by a controller’s decision to present the data.”
    - Controller
    “The facility within the application that directs traffic, on the one hand querying the models for specific data, and on the other hand organizing that data (searching, sorting) into a form that fits the needs of a given view.”

2. What is a gem?

  Your answer: a gem is a special tool made for Rails that executes a special function inside Rails

  Researched answer:
  A gem is a self-contained "Ruby programs and libraries".

  Inside gems are the following components:
  - Code (including tests and supporting utilities)
  - Documentation
  - gemspec


3. Why is it important to have validations in your application?

  Your answer: so that our data in models can be organized in a clean and efficient way. for instance, we don't want users to  clog data by producing too many model instances with columns that have nil values. 

  Researched answer: "Data validation is vital to ensure the data is clean, correct and useful. ... On the other hand, if it doesn't ask you, any errors you get in your data are going to flow right through into the data warehouse."



4. Describe a possible relationship between a model called Person and a model called Computer. Based on your description, which model would hold the foreign key?

  Your answer: usually, a person owns a computer (or computers). thus, I would assume that (a) person 'has_many' computers while (a) computer 'belongs_to' (a) person. In this logic, the computer model would hold the foreign key ('person_id') that equates to the primary key of the associated instance of the model Person.

  Researched answer: same as my answer?



5. What is object-relational mapping?

  Your answer: i forget...:/

  Researched answer: "Object-relational mapping (ORM, O/RM, and O/R mapping tool) in computer science is a programming technique for converting data between incompatible type systems using object-oriented programming languages."
  
  Your answer(2nd chance):
  Oh! I remember now. So, Active Records and Migrations are examples of ORM between Ruby and Postgresql/SQL -- two languages/systems that normally are incompatible. :^)



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes:
    - REST (i.e. Representation State Transfer) is an architectural style for defining our routes. It is a way of mapping HTTP routes and the CRUD functionalities.
    - When building APIs, we want to provide the four basic types of functionality. There must be a way to Create, Read, Update, and Delete resources.
    - In a REST environment, CRUD often corresponds to the HTTP methods POST, GET, PUT, and DELETE, respectively.
    - The 7 RESTful routes: 
      - Index (GET) 
      - New (GET)
      - Create (POST)
      - Show (GET)
      - Edit (GET)
      - Update (PUT)
      - Destroy (DELETE)

- json: JSON stands for JavaScript Object Notation. JSON is a lightweight format for storing and transporting data. JSON is often used when data is sent from a server to a web page. JSON is "self-describing" and easy to understand.

- API: An Application Programming Interface (API) is a tool set that programmers can use in helping them create software. ... An example is the Apple (iOS) API that's used to detect touchscreen interactions. APIs are tools. They allow you as a programmer to deliver solid solutions fairly rapidly.

- Endpoints: Simply put, an endpoint is one end of a communication channel. When an API interacts with another system, the touchpoints of this communication are considered endpoints. For APIs, an endpoint can include a URL of a server or service.

- Strong params: "Strong Parameters is a feature of Rails that prevents assigning request parameters to objects unless they have been explicitly permitted. It has its own DSL (Domain Specific Language, or in other words, a predefined syntax it understands), that allows you to indicate what parameters should be allowed."
