# Expense Tracker Server

A simple RESTful API for managing personal expenses. Users can add, view, update, and delete expenses.

---

## Features

- **Add Expense:** Create a new expense with title, amount, category, and date.
- **View Expenses:** Fetch all expenses (excluding deleted ones).
- **Edit Expense:** Update any field of an existing expense.
- **Delete Expense:** Delete an expense.

---

## Tech Stack

- **Node.js**
- **Express**
- **MongoDB** (with Mongoose)
- **TypeScript**
- **Zod** (for validation)

---

## API Endpoints

| Method | Endpoint        | Description        | Body Fields                                   |
| ------ | --------------- | ------------------ | --------------------------------------------- |
| POST   | `/expenses`     | Add a new expense  | `title`, `amount`, `category?`, `date`        |
| GET    | `/expenses`     | Fetch all expenses | _none_                                        |
| PATCH  | `/expenses/:id` | Update an expense  | Any of: `title`, `amount`, `category`, `date` |
| DELETE | `/expenses/:id` | Delete an expense  | _none_                                        |

---

## Validation Rules

- **title**: required, string, minimum 3 characters
- **amount**: required, number, greater than 0
- **category**: optional, string
- **date**: required, valid ISO date string

---

## Example Request Bodies

### Add Expense (`POST /expenses`)

```json
{
  "title": "Lunch with team",
  "amount": 25.5,
  "category": "Food",
  "date": "2025-08-14T12:30:00.000Z"
}
```

### Update Expense (`PATCH /expenses/:id`)

```json
{
  "amount": 30,
  "category": "Business Lunch"
}
```

---

## Notes

- All endpoints return a consistent JSON response structure.
- Validation errors and API errors are handled gracefully.
