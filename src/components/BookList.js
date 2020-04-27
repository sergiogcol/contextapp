import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { BookContext } from '../contexts/BookContext';

export const BookList = () => {
    //static contextType = ThemeContext; If it was a class component
        const { isLightTheme, light, dark } = useContext(ThemeContext); 
        // const { isLightTheme, light, dark } = this.context; If it was a class component
        const { books } = useContext(BookContext)
        const theme = isLightTheme ? light : dark;
        return (
            <div className= 'book-list' style={{color: theme.syntax, background: theme.bg }}>
                <ul>
                {books.map( book => <li style={{ background: theme.ui }} key={book.id}>{book.title}</li>)}
                </ul>
            </div>
        )
    
}
