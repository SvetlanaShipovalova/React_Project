import React, { useState } from "react";

<label className="text_input" class="w-100 p-3 bg-secondary start-50" htmlFor="text">Введите запрос:</label>
                    <textarea className="text_input" style={{ color: "black" }}
                        id="text" name="text" value={text} onChange={handleTextChange}
                    />
                    <h4 className="text_input">{text}</h4>
                    <button className="text_input" style={{ color: "black" }} onClick={removeText}>Стереть</button>