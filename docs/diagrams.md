# TripBng - Technical Diagrams

## 1. App Flow Overview

```mermaid
flowchart TD
    A[Start App] --> B[Splash Screen]
    B --> C{First Time User?}
    C -->|Yes| D[OnBoarding Screens]
    C -->|No| E[Check Auth Token]
    D --> F[Sign Up / Login]
    E -->|Token Exists| G[Home Screen]
    E -->|No Token| F
    F --> G
    G --> H[Bottom Navigation]
    H --> I[Home]
    H --> J[Bookings]
    H --> K[Wishlist]
    H --> L[Account]
    I --> M{Select Service}
    M -->|Flights| N[Flight Search]
    M -->|Hotels| O[Hotel Search]
```

## 2. Authentication Flow

```mermaid
flowchart LR
    A[Login/Register] --> B{Choose Method}
    B --> C[Email Sign Up]
    B --> D[Mobile Sign Up]
    B --> E[Password Sign Up]
    C --> F[Email OTP Verification]
    D --> G[Mobile OTP Verification]
    F --> H{Verify Success?}
    G --> H
    H -->|Yes| I[Create Account]
    H -->|No| J[Retry OTP]
    E --> I
    I --> K[Store Token]
    K --> L[Home Screen]
```

## 3. Flight Booking Flow

```mermaid
flowchart TD
    A[Select Flight] --> B[Trip Type]
    B --> C[One Way]
    B --> D[Round Trip]
    B --> E[Multi City]
    C --> F[Search Flights]
    D --> F
    E --> F
    F --> G[View Results]
    G --> H{Filter & Sort}
    H --> G
    G --> I[Select Flight]
    I --> J[View Flight Details]
    J --> K[Fill Passenger Details]
    K --> L[Select Seats]
    L --> M[Review Booking]
    M --> N[Payment]
    N --> O[Confirmation]
    O --> P[View Ticket]
```

## 4. Hotel Booking Flow

```mermaid
flowchart TD
    A[Select Hotel] --> B[Search Hotels]
    B --> C[View Results]
    C --> D{Hotel Filters}
    D --> C
    C --> E[Select Hotel]
    E --> F[View Hotel Details]
    F --> G[Select Room Type]
    G --> H[View Room Options]
    H --> I[Select Rooms]
    I --> J[Review Booking]
    J --> K[Payment]
    K --> L[Confirmation]
    L --> M[View Booking]
```

## 5. Navigation Structure

```mermaid
graph TD
    subgraph "Stack Navigator"
        S[Splash]
        OB[OnBoarding]
        AU[Auth Screens]
        BN[Bottom Navigation]
    end

    subgraph "Bottom Tabs"
        BN --> H[Home]
        BN --> BK[Bookings]
        BN --> WL[Wishlist]
        BN --> AC[Account]
    end

    subgraph "Home Menu"
        H --> HF[Flight Search]
        H --> HR[Hotel Search]
        HF --> SF[Select Flight]
        HR --> SH[Select Hotel]
    end

    subgraph "Flight Flow"
        SF --> ShF[Show Flights]
        ShF --> FD[Flight Details]
        FD --> BD[Book Details]
        BD --> FS[Flight Seats]
        FS --> RP[Review Payment]
        RP --> FPY[Flight Payment]
        FPY --> FOD[Order Details]
    end

    subgraph "Hotel Flow"
        SH --> ShH[Show Hotels]
        ShH --> HD[Hotel Details]
        HD --> SR[Select Room]
        SR --> RB[Review Booking]
        RB --> HPY[Hotel Payment]
        HPY --> HB[Hotel Booking]
    end
```

## 6. Data Flow Diagram (DFD) - Level 0

```mermaid
graph TD
    subgraph "External Entities"
        U[User]
        EXT[External API]
    end

    subgraph "System"
        APP[TripBng App]
        API[Backend API]
        DB[(Database)]
    end

    U -->|Interacts| APP
    APP -->|HTTP Requests| API
    API -->|Response| APP
    API -->|Queries/Updates| DB
    DB -->|Data| API
    API -->|Integrates| EXT
```

## 7. Data Flow Diagram (DFD) - Level 1

```mermaid
flowchart TB
    subgraph User
        U1[Mobile App User]
    end

    subgraph TripBng System
        subgraph Frontend
            A1[Auth Module]
            A2[Search Module]
            A3[Booking Module]
            A4[Payment Module]
            A5[Profile Module]
        end

        subgraph Backend Services
            B1[Auth Service]
            B2[Flight Service]
            B3[Hotel Service]
            B4[Booking Service]
            B5[Payment Service]
        end

        subgraph Data Layer
            D1[(User DB)]
            D2[(Flight DB)]
            D3[(Hotel DB)]
            D4[(Booking DB)]
        end
    end

    U1 --> A1
    U1 --> A2
    U1 --> A3
    U1 --> A4
    U1 --> A5

    A1 --> B1
    A2 --> B2
    A2 --> B3
    A3 --> B4
    A4 --> B5
    A5 --> B1

    B1 --> D1
    B2 --> D2
    B3 --> D3
    B4 --> D4
    B5 --> D4
```

## 8. Use Case Diagram

```mermaid
graph TD
    subgraph Actors
        USER[User]
        ADMIN[Admin]
    end

    subgraph Use Cases
        UC1[Register]
        UC2[Login]
        UC3[Search Flights]
        UC4[Book Flights]
        UC5[Search Hotels]
        UC6[Book Hotels]
        UC7[Make Payment]
        UC8[View Bookings]
        UC9[Manage Profile]
        UC10[View Wishlist]
        UC11[Receive Notifications]
    end

    USER --> UC1
    USER --> UC2
    USER --> UC3
    USER --> UC4
    USER --> UC5
    USER --> UC6
    USER --> UC7
    USER --> UC8
    USER --> UC9
    USER --> UC10
    USER --> UC11

    ADMIN --> UC8
    ADMIN --> UC11
```

## 9. Database Schema Overview

```mermaid
erDiagram
    USER ||--o{ BOOKING : makes
    USER ||--o{ WISHLIST : has
    USER ||--o{ NOTIFICATION : receives
    BOOKING ||--|| FLIGHT_BOOKING : contains
    BOOKING ||--|| HOTEL_BOOKING : contains

    USER {
        string id PK
        string email
        string mobile
        string name
        string password_hash
        datetime created_at
    }

    BOOKING {
        string id PK
        string user_id FK
        string booking_type
        string status
        decimal total_amount
        datetime created_at
    }

    FLIGHT_BOOKING {
        string id PK
        string booking_id FK
        string origin
        string destination
        string departure_date
        string return_date
        string flight_class
    }

    HOTEL_BOOKING {
        string id PK
        string booking_id FK
        string hotel_id
        string check_in
        string check_out
        int rooms
    }

    WISHLIST {
        string id PK
        string user_id FK
        string item_type
        string item_id
    }

    NOTIFICATION {
        string id PK
        string user_id FK
        string title
        string message
        bool is_read
        datetime created_at
    }
```

## 10. API Architecture

```mermaid
graph LR
    subgraph Client
        APP[TripBng App]
    end

    subgraph API_Gateway
        REQ[Request]
        MID[Middleware]
        AUTH[Auth Check]
    end

    subgraph Routes
        R1[/auth/*]
        R2[/flights/*]
        R3[/hotels/*]
        R4[/bookings/*]
        R5[/user/*]
    end

    subgraph Services
        S1[Auth Service]
        S2[Flight Service]
        S3[Hotel Service]
        S4[Booking Service]
    end

    APP --> REQ
    REQ --> MID
    MID --> AUTH
    AUTH --> R1
    AUTH --> R2
    AUTH --> R3
    AUTH --> R4
    AUTH --> R5

    R1 --> S1
    R2 --> S2
    R3 --> S3
    R4 --> S4
```

## 11. State Management Overview

```mermaid
flowchart LR
    subgraph Local State
        LS1[useState]
        LS2[useReducer]
    end

    subgraph Persistent State
        PS1[AsyncStorage]
        PS2[Token Storage]
    end

    subgraph Backend State
        BS1[API Calls]
        BS2[React Query]
    end

    LS1 --> PS1
    LS2 --> PS1
    PS1 --> BS1
    BS1 --> BS2
```

## 12. Component Hierarchy

```mermaid
graph TD
    APP[App] --> NAV[NavigationContainer]

    NAV --> STACK[Stack Navigator]
    NAV --> TABS[Bottom Tab Navigator]

    STACK --> AUTH[Auth Screens]
    STACK --> MAIN[Main Screens]

    TABS --> HOME_TAB[Home Tab]
    TABS --> BOOK_TAB[Bookings Tab]
    TABS --> WISH_TAB[Wishlist Tab]
    TABS --> ACC_TAB[Account Tab]

    subgraph "Home Stack"
        HOME_TAB --> HS[Home Screen]
        HS --> FSE[Flight Search]
        HSE[Hotel Search]
    end

    subgraph "Flight Stack"
        FSE --> SFR[Show Flights]
        SFR --> FDT[Flight Details]
        FDT --> FBD[Book Details]
        FBD --> FST[Select Seats]
        FST --> FRP[Review Payment]
        FRP --> FPY[Payment]
        FPY --> FOD[Order Details]
    end

    subgraph "Hotel Stack"
        HSE --> SHR[Show Hotels]
        SHR --> HDT[Hotel Details]
        HDT --> SRT[Select Room]
        SRT --> HRP[Review Booking]
        HRP --> HPY[Payment]
        HPY --> HOD[Booking Confirmation]
    end
```
