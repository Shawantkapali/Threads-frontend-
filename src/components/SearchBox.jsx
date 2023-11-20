import { Input, InputGroup, InputRightElement, Button, FormControl, Link } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { Link as RouterLink } from "react-router-dom";

import { useRecoilValue } from 'recoil';
import userAtom from '../atoms/userAtom';


const SearchBox = () => {
	const user = useRecoilValue(userAtom);
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const history = useNavigate();

// Inside the useEffect function where you handle the search
// const handleSearch = async () => {
//     console.log('handleSearch called');
//     try {
//         if (!query.trim()) {
//             setSearchResults([]);
//             return;
//         }
//         const res = await axios.get(`api/users/profile/${query}`, { params: { query, limit: 2 } });
//         console.log(res.data); // Check the response data structure

//         if (Array.isArray(res.data)) {
//             setSearchResults(res.data);
//         } else {
//             setSearchResults([]);
//         }
//     } catch (error) {
//         console.error(error);
//         // Handle other errors (e.g., network errors)
//     }
// };
    
    

    return (
        <div style={{ padding: '10px' }}>
            <FormControl>
                <InputGroup>
                    <Input
                        placeholder='Type Username'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
{/* {searchResults && searchResults.length > 0 && (
    <div className="search-result">
        {searchResults.map((user) => (
			<Link as={RouterLink} to={`/${user.username}`}>
            <div className="img">
              <img src={user.profilePic} alt="" />
            </div>
            <div className="username">{user.username}</div>
          </Link>
        ))}
    </div>
)} */}

                    <InputRightElement width="4.5rem">
                    <Link as={RouterLink} to={`/${query}`}>
                            Search
                        </Link>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

        </div>
    );
};

export default SearchBox;
