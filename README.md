# DROPBOX REDESIGN

This is a system for share archives!

# Get Started


1. Clone the repository.
2. Execute command `npm install` or `yarn install` to install all dependence in folder "website" AND "server"

## Backend

Do you need execute express and connect Postgress server in your system.

### Access the "server"
Inside this folder  - you find a subfolder named "migrations" this folder contains all migration files (I created this folder to store the main files that hold the database SQL code)

### Create the database
Take the code base and create in the postgress the database for running the system and connect the database in the project.

For you connect in the database database in project you just go in folder "connect" and connect the credentials OR create the archive ".env" and save the infos according in the "Configurations of the development variables". 

Warning: I Don't responsability with you modify something in the database!


# Configurations of the development variables


1. **Values of the development variables**: Just a people with permission can access in the values of the development variable.
2. Structure of the variables:

```
??????

```

1. **Protection of Environment Variables**:
Environment variables may contain sensitive information and should not be shared publicly. Ensure to add the .env file to the list of files ignored by Git version control (e.g., using the .gitignore file) and do not commit the .env file to public repositories.

### **Attention!**

Make sure that the environment variables are correctly configured before starting the system. Otherwise, certain functionalities may not work properly, or the system may fail to connect to external services.

Remember to keep the environment variables in a secure location and refrain from sharing them with unauthorized individuals.

# License

The license stay in this path:

```
.
└── /
    └── LICENSE.md
```

# History of the versions

The version should be updated according to the commits, below are all the versions:

| Date | Version | Description |
| --- | --- | --- |
| 21/08/2024 | 0.1.0 | New component: Title Pattern |
