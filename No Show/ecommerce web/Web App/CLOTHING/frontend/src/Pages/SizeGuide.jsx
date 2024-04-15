import React, { useState } from 'react';
import "./CSS/SizeGuide.css";

const SizeGuide = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="size-guide">
      <h2>Size Guide</h2>
      <div className="category-buttons">
        <button
          className={selectedCategory === 'women' ? 'active' : ''}
          onClick={() => handleCategoryChange('women')}
        >
          Women's
        </button>
        <button
          className={selectedCategory === 'men' ? 'active' : ''}
          onClick={() => handleCategoryChange('men')}
        >
          Men's
        </button>
        <button
          className={selectedCategory === 'kids' ? 'active' : ''}
          onClick={() => handleCategoryChange('kids')}
        >
          Kids
        </button>
      </div>

      {selectedCategory === 'women' && (
        <>
          <h3>Women's Fit Guide</h3>
          <table>
            <thead>
              <tr>
                <th>Size (Alpha)</th>
                <th>Bust</th>
                <th>Waist</th>
                <th>Hip</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>S</td>
                <td>35.5 - 37"</td>
                <td>27 - 28.5"</td>
                <td>39.5 - 42"</td>
              </tr>
              <tr>
                <td>M</td>
                <td>37.5 - 39"</td>
                <td>29 - 30.5"</td>
                <td>42.5 - 44"</td>
              </tr>
              <tr>
                <td>L</td>
                <td>39.5 - 42"</td>
                <td>31 - 33.5"</td>
                <td>44.5 - 46.5"</td>
              </tr>
              <tr>
                <td>XL</td>
                <td>42.5 - 44.5"</td>
                <td>34 - 35.5"</td>
                <td>47"</td>
              </tr>
            </tbody>
          </table>
        </>
      )}

      {selectedCategory === 'men' && (
        <>
          <h3>Men's Fit Guide</h3>
          <table>
            <thead>
              <tr>
                <th>Size (Numeric)</th>
                <th>Bust</th>
                <th>Waist</th>
                <th>Hip</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>S</td>
                <td>35.5 - 36.5"</td>
                <td>27 - 28"</td>
                <td>37.5 - 38.5"</td>
              </tr>
              <tr>
                <td>M</td>
                <td>37.5 - 38.5"</td>
                <td>29 - 30"</td>
                <td>39.5 - 40.5"</td>
              </tr>
              <tr>
                <td>L</td>
                <td>39.5 - 40.5"</td>
                <td>31 - 32"</td>
                <td>41.5 - 42.5"</td>
              </tr>
              <tr>
                <td>XL</td>
                <td>41.5 - 42.5"</td>
                <td>33 - 34"</td>
                <td>43.5 - 44.5"</td>
              </tr>
            </tbody>
          </table>
        </>
      )}

      {selectedCategory === 'kids' && (
        <>
          <h3>Kid's Size Guide</h3>
          <table>
            <thead>
              <tr>
                <th>Size</th>
                <th>Age</th>
                <th>Height</th>
                <th>Chest</th>
                <th>Waist</th>
                <th>Hip</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>S</td>
                <td>4 Years</td>
                <td>38 - 41"</td>
                <td>22.5 - 23"</td>
                <td>22 - 22.5"</td>
                <td>22 - 22.5"</td>
              </tr>
              <tr>
                <td>M</td>
                <td>5 Years</td>
                <td>41 - 44"</td>
                <td>23 - 23.5"</td>
                <td>22.5 - 23"</td>
                <td>23 - 23.5"</td>
              </tr>
              <tr>
                <td>L</td>
                <td>6 Years</td>
                <td>44 - 46.5"</td>
                <td>23.5 - 24"</td>
                <td>23 - 23.5"</td>
                <td>24 - 24.5"</td>
              </tr>
              <tr>
                <td>XL</td>
                <td>7 Years</td>
                <td>46.5 - 49.5"</td>
                <td>24 - 24.5"</td>
                <td>23.5 - 24"</td>
                <td>24.5 - 25"</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default SizeGuide;
