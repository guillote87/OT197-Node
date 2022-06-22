const path = require('path');
const swaggerJSDoc = require('swagger-jsdoc');
const { version } = require("../package.json")
const swaggerUI = require('swagger-ui-express');
module.exports.options = {
    definition: {
        "swagger": "2.0",
        "info": {
            "description": "This is a sample server API ONG197-Node .  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.",
            "version": "1.0.0",
            "title": "Swagger ONG-197-Node",
            "termsOfService": "http://swagger.io/terms/",
            "contact": {
                "email": "apiteam@swagger.io"
            },
            "license": {
                "name": "Apache 2.0",
                "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
            }
        },
        "basePath": "/",
        "tags": [
            {
                "name": "member",
                "description": "Everything about your Member",
                "externalDocs": {
                    "description": "Find out more",
                    "url": "http://swagger.io"
                }
            },
            {
                "name": "Auth",
                "description": "Auht user endpoints",
            },
            {
                "name": "Categories",
                "description": "Categories endpoints",
            },
        ],
        "schemes": [
            "http"
        ],
        "paths": {
            "/members": {
                "post": {
                    "tags": [
                        "member"
                    ],
                    "summary": "Add a new member to the ONG",
                    "description": "",
                    "operationId": "createMember",
                    "consumes": [
                        "application/json",
                        "application/xml"
                    ],
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "description": "Member object that needs to be added to the ong",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/Member"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Member created",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/Member"
                                }
                            }
                        },
                        "500": {
                            "description": "Internal server error"
                        }
                    },
                    "security": [
                        {
                            "Authorization": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]
                },
            },
            "/members/{memberID}": {
                "delete": {
                    "tags": [
                        "member"
                    ],
                    "summary": "Find and delete Member by id",
                    "operationId": "deleteMember",
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "Member id field is required",
                            "required": true,
                            "type": "integer",
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Member deleted",
                        },
                        "404": {
                            "description": "Member not found"
                        }
                    },
                    "security": [
                        {
                            "Authorization": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]
                },
                "put": {
                    "tags": [
                        "member"
                    ],
                    "summary": "Find and update Member by id",
                    "operationId": "updateMember",
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "Member id field is required",
                            "required": true,
                            "type": "integer",
                        },
                        {
                            "in": "body",
                            "name": "body",
                            "description": "Member object that needs to be put to the ong",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/Member"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Member update",
                        },
                        "404": {
                            "description": "Member not found"
                        },
                        "500": {
                            "description": "Internal server error"
                        }
                    },
                    "security": [
                        {
                            "Authorization": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]
                }
            },
            "/member/{page}": {
                "get": {
                    "tags": [
                        "member"
                    ],
                    "summary": "Finds member 10 per page",
                    "operationId": "getMembers",
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],
                    "parameters": [
                        {
                            "name": "page",
                            "in": "path",
                            "description": "Page actual",
                            "required": true,
                            "type": "integer",
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "successful operation",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/Member"
                                }
                            }
                        },
                        "500": {
                            "description": "Internal server error"
                        }
                    },
                    "security": [
                        {
                            "Authorization": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]
                }
            },
            "/users/auth/register": {
                "post": {
                    "tags": [
                        "Auth"
                    ],
                    "summary": "Add a new user to the ONG",
                    "description": "",
                    "consumes": [
                        "application/json",
                        "application/xml"
                    ],
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "description": "User object that needs to be added to the ong",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/User"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "User created",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/User"
                                }
                            }
                        },
                        "500": {
                            "description": "Internal server error"
                        }
                    },
                    "security": [
                        {
                            "Authorization": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]
                },
            },
            "/users/auth/login": {
                "post": {
                    "tags": [
                        "Auth"
                    ],
                    "summary": "Login user to the ONG",
                    "description": "",
                    "consumes": [
                        "application/json",
                        "application/xml"
                    ],
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "description": "The user email and password",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/Auth"
                            }
                        }
                    ],
                    "example": {
                        "email": "juanperez@gmail.com",
                        "password": "Ju#nPerez2",
                    },
                    "responses": {
                        "200": {
                            "description": "Login successful",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/User"
                                }
                            }
                        },
                        "500": {
                            "description": "Internal server error"
                        }
                    },
                    "security": [
                        {
                            "Authorization": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]
                }
            },
            "/users/auth/me": {
                "get": {
                    "tags": [
                        "Auth"
                    ],
                    "summary": "Info of User logged",
                    "description": "",
                    "consumes": [
                        "application/json",
                        "application/xml"
                    ],
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],
                    "responses": {
                        "200": {
                            "description": "Info",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/User"
                                }
                            }
                        },
                        "500": {
                            "description": "Internal server error"
                        }
                    },
                    "security": [
                        {
                            "Authorization": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]
                }
            }, "/users/users": {
                "get": {
                    "tags": [
                        "User"
                    ],
                    "summary": "List user to the ONG",
                    "description": "",
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],

                    "responses": {
                        "200": {
                            "description": "List",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/User"
                                }
                            }
                        },
                        "500": {
                            "description": "Internal server error"
                        }
                    },
                    "security": [
                        {
                            "Authorization": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]

                },
            }, "/categories": {
                "get": {
                    "tags": [
                        "Categories"
                    ],
                    "summary": "List categories 10 per page ",
                    "description": "",
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],

                    "responses": {
                        "200": {
                            "description": "List",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/Categories"
                                }
                            }
                        },
                        "500": {
                            "description": "Internal server error"
                        }
                    },
                    "security": [
                        {
                            "Authorization": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]

                },
            }, "/categories/{id}": {
                "get": {
                    "tags": [
                        "Categories"
                    ],
                    "summary": "Find Category by ID",
                    "description": "",
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "Category id field is required",
                            "required": true,
                            "type": "integer",
                        },
                    ],

                    "responses": {
                        "200": {
                            "description": "List",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/Categories"
                                }
                            }
                        },
                        "500": {
                            "description": "Internal server error"
                        }
                    },
                    "security": [
                        {
                            "Authorization": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]
                },
                "put": {
                    "tags": [
                        "Categories"
                    ],
                    "summary": "Update Category by ID",
                    "description": "",
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "Category id field is required",
                            "required": true,
                            "type": "integer",
                        },
                        {
                            "in": "body",
                            "name": "body",
                            "description": "Category object that needs to be added to the ong",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/Categories"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "List",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/Categories"
                                }
                            }
                        },
                        "500": {
                            "description": "Internal server error"
                        }
                    },
                    "security": [
                        {
                            "Authorization": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]
                },
                "delete": {
                    "tags": [
                        "Categories"
                    ],
                    "summary": "Delete Category by ID",
                    "description": "",
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "Category id field is required",
                            "required": true,
                            "type": "integer",
                        },
                    ],

                    "responses": {
                        "200": {
                            "description": "List",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/Categories"
                                }
                            }
                        },
                        "500": {
                            "description": "Internal server error"
                        }
                    },
                    "security": [
                        {
                            "Authorization": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]
                }
            },
            "/news": {
                "post": {
                    "tags": [
                        "News"
                    ],
                    "summary": "Add a News to the ONG",
                    "description": "",
                    "operationId": "createNews",
                    "consumes": [
                        "application/json",
                        "application/xml"
                    ],
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "description": "News object that needs to be added to the ong",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/News"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "News created",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/News"
                                }
                            }
                        },
                        "500": {
                            "description": "Internal server error"
                        }
                    },
                    "security": [
                        {
                            "Authorization": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]
                },
                "get": {
                    "tags": [
                        "News"
                    ],
                    "summary": "List News to the ONG",
                    "description": "",
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],

                    "responses": {
                        "200": {
                            "description": "List",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/News"
                                }
                            }
                        },
                        "500": {
                            "description": "Internal server error"
                        }
                    },
                    "security": [
                        {
                            "Authorization": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]

                },
            },
            "/news?page={page}": {
                "get": {
                    "tags": [
                        "News"
                    ],
                    "summary": "Finds 10 news per page",
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],
                    "parameters": [
                        {
                            "name": "page",
                            "in": "path",
                            "description": "Page actual",
                            "required": true,
                            "type": "integer",
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "successful operation",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/News"
                                }
                            }
                        },
                        "500": {
                            "description": "Internal server error"
                        }
                    },
                    "security": [
                        {
                            "Authorization": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]
                }
            },
            "/news/{id}": {
                "get": {
                    "tags": [
                        "News"
                    ],
                    "summary": "Find News by ID",
                    "description": "",
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "News id field is required",
                            "required": true,
                            "type": "integer",
                        },
                    ],

                    "responses": {
                        "200": {
                            "description": "List",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/News"
                                }
                            }
                        },
                        "500": {
                            "description": "Internal server error"
                        }
                    },
                    "security": [
                        {
                            "Authorization": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]
                },
                "put": {
                    "tags": [
                        "News"
                    ],
                    "summary": "Update News by ID",
                    "description": "",
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "News id field is required",
                            "required": true,
                            "type": "integer",
                        },
                        {
                            "in": "body",
                            "name": "body",
                            "description": "News object that needs to be added to the ong",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/News"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "List",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/News"
                                }
                            }
                        },
                        "500": {
                            "description": "Internal server error"
                        }
                    },
                    "security": [
                        {
                            "Authorization": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]
                },
                "delete": {
                    "tags": [
                        "News"
                    ],
                    "summary": "Delete News by ID",
                    "description": "",
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "News id field is required",
                            "required": true,
                            "type": "integer",
                        },
                    ],

                    "responses": {
                        "200": {
                            "description": "List",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/News"
                                }
                            }
                        },
                        "500": {
                            "description": "Internal server error"
                        }
                    },
                    "security": [
                        {
                            "Authorization": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]
                }
            },
            "/testimonials": {
                "post": {
                    "tags": [
                        "Testimonials"
                    ],
                    "summary": "Add a Testimonia to the ONG",
                    "description": "",
                    "operationId": "createTestimonial",
                    "consumes": [
                        "application/json",
                        "application/xml"
                    ],
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "description": "Testimonial object that needs to be added to the ong",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/Testimonials"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Testimonial created",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/Testimonials"
                                }
                            }
                        },
                        "500": {
                            "description": "Internal server error"
                        }
                    },
                    "security": [
                        {
                            "Authorization": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]
                },
                "get": {
                    "tags": [
                        "Testimonials"
                    ],
                    "summary": "List Testimonials to the ONG",
                    "description": "",
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],

                    "responses": {
                        "200": {
                            "description": "List",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/Testimonials"
                                }
                            }
                        },
                        "500": {
                            "description": "Internal server error"
                        }
                    },
                    "security": [
                        {
                            "Authorization": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]

                },
            },
            "/testimonials/{id}": {
                "put": {
                    "tags": [
                        "Testimonials"
                    ],
                    "summary": "Update Testimonials by ID",
                    "description": "",
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "Testimonials id field is required",
                            "required": true,
                            "type": "integer",
                        },
                        {
                            "in": "body",
                            "name": "body",
                            "description": "News object that needs to be added to the ong",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/Testimonials"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "List",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/Testimonials"
                                }
                            }
                        },
                        "500": {
                            "description": "Internal server error"
                        }
                    },
                    "security": [
                        {
                            "Authorization": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]
                },
                "delete": {
                    "tags": [
                        "Testimonials"
                    ],
                    "summary": "Delete Testimonials by ID",
                    "description": "",
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "Testimonials id field is required",
                            "required": true,
                            "type": "integer",
                        },
                    ],

                    "responses": {
                        "200": {
                            "description": "List",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/Testimonials"
                                }
                            }
                        },
                        "500": {
                            "description": "Internal server error"
                        }
                    },
                    "security": [
                        {
                            "Authorization": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]
                }
            },
        },
            "securityDefinitions": {
                "Authorization": {
                    "type": "apiKey",
                    "name": "Authorization",
                    "in": "header"
                }
            },
            "definitions": {
                "Member": {
                    "type": "object",
                    "required": [
                        "name"
                    ],
                    "properties": {
                        "image": {
                            "type": "string",
                        },
                        "name": {
                            "type": "string"
                        }
                    }
                },
                "Auth": {
                    "type": "object",
                    "required": [
                        "email",
                        "password"
                    ],
                    "properties": {
                        "email": {
                            "type": "string"
                        },
                        "password": {
                            "type": "string"
                        }
                    },
                    "example": {
                        "email": "juanperez@gmail.com",
                        "password": "Ju#nPerez2"
                    }
                },
                "User": {
                    "type": "object",
                    "required": [
                        "firstName",
                        "lastName",
                        "email",
                        "password",
                        "roleId",
                        "photo"
                    ],
                    "properties": {
                        "firstName": {
                            "type": "string",
                        },
                        "lastName": {
                            "type": "string",
                        },
                        "email": {
                            "type": "string",
                        },
                        "password": {
                            "type": "string",
                        },
                        "roleId": {
                            "type": "integer",
                        },
                        "photo": {
                            "type": "string",
                        },
                    },
                    "example": {
                        "firstName": "Juan",
                        "lastName": "Perez",
                        "email": "juanperez@gmail.com",
                        "password": "Ju#nPerez2",
                        "roleId": 1,
                        "photo": "data:image/jpeg;base64,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"
                    }
                },
                "Categories": {
                    "type": "object",
                    "required": [
                        "name",
                        "description",
                        "image"
                    ],
                    "properties": {
                        "name": {
                            "type": "string",
                        },
                        "description": {
                            "type": "string",
                        },
                        "image": {
                            "type": "string",
                        }
                    },
                    "example": {
                        "name": "Category 1",
                        "description": "The category 1 is for testing ",
                        "image": "cat-1.jpg",
                    }
                },
                "News": {
                    "type": "object",
                    "required": [
                        "name",
                        "content",
                        "image"
                    ],
                    "properties": {
                        "name": {
                            "type": "string",
                        },
                        "content": {
                            "type": "string",
                        },
                        "image": {
                            "type": "string",
                        },
                        "categoryId":{
                            "type": "integer"
                        }
                    },
                    "example": {
                        "name": "News 1",
                        "content": "Example for New 1",
                        "image": "news-1.jpg",
                        "categoryId":"1"
                    }
                },
                "Testimonials": {
                    "type": "object",
                    "required": [
                        "name",
                    ],
                    "properties": {
                        "name": {
                            "type": "string",
                        },
                        "content": {
                            "type": "string",
                        },
                        "image": {
                            "type": "string",
                        }
                    },
                    "example": {
                        "name": "Testimonial 1",
                        "content": "Example for testimonial 1",
                        "image": "testimonial-1.jpg"
                    }
                }
            }
        
    },
        basePath: "/",
        apis: [`${path.join(__dirname, "/documentations/*.js")}`],
        "externalDocs": {
            "description": "Find out more about Swagger",
            "url": "http://swagger.io"
        }
    }
const swaggerSpect = swaggerJSDoc(this.options);

function swaggerDocs(app, port) {
    app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpect));
    app.get("docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpect);
    })
}

module.exports = swaggerDocs;

