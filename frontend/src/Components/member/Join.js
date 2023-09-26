import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, Form, Button, Modal } from 'react-bootstrap';
import { FaCheckCircle,FaTimesCircle,FaExclamationCircle  } from 'react-icons/fa';

function Join({ email, nickname, password, changeNickname}) {
  const [showTermModal, setShowTermModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [isIdChecked, setIsIdChecked] = useState(null);
  const [isNicknameChecked, setIsNicknameChecked] = useState(null);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(null);

  const handlePasswordChange = (e) => {
	const newPassword = e.target.value;
	if (newPassword.length >= 8) {
	  setIsPasswordValid(true);
	} else {
	  setIsPasswordValid(false);
	}
  }
  const handleConfirmPasswordChange = (e) => {
	const newConfirmPassword = e.target.value;
	if (newConfirmPassword === password) {
	  setIsPasswordMatch(true);
	} else {
	  setIsPasswordMatch(false);
	}
  }
  

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    height: '65vh',
  };

  const boxStyle = {
    padding: '20px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '8px',
  };

  const scrollBoxStyle = {
    maxHeight: '150px',
    overflowY: 'scroll',
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '20px',
  };

  const checkIdDuplicate = async () => {
	// 실제로는 서버에 요청하여 중복 여부를 확인해야 합니다.
	//const isDuplicate = await axios.get(`/api/checkIdDuplicate/${email}`);
	// return isDuplicate;
	return true;
  }
  
  const checkNicknameDuplicate = async () => {
	// 실제로는 서버에 요청하여 중복 여부를 확인해야 합니다.
	//const isDuplicate = await axios.get(`/api/checkNicknameDuplicate/${nickname}`);
	//return isDuplicate;
	return true;
  }
  

  const handleTermClick = () => {
    setShowTermModal(true);
  }

  const handlePrivacyClick = () => {
    setShowPrivacyModal(true);
  }

  const handleCloseTermModal = () => {
    setShowTermModal(false);
  }

  const handleClosePrivacyModal = () => {
    setShowPrivacyModal(false);
  }

  const handleIdCheck = async () => {
    const isDuplicate = await checkIdDuplicate();
	console.log(isDuplicate);
    setIsIdChecked(isDuplicate);
  }

  const handleNicknameCheck = async () => {
    const isDuplicate = await checkNicknameDuplicate();
    setIsNicknameChecked(isDuplicate);
  }

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2 className="text-center mb-4">회원가입</h2>

        <InputGroup className="mb-3">
          <InputGroup.Text id="email" style={{ minWidth: '150px' }}>
            email
          </InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="email"
            aria-label="email"
            aria-describedby="email"
            value={email}
          />
          <Button variant="outline-secondary" onClick={handleIdCheck} style={{ height: '38px' }}>
		  	{isIdChecked
				?  <FaCheckCircle style={{ color: 'green' }} /> // 성공한 경우
				: false && <FaTimesCircle style={{ color: 'red' }} />   // 실패한 경우
			}
			아이디 중복 체크
          </Button>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="nickname" style={{ minWidth: '150px' }}>
            별명
          </InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="nickname"
            aria-label="nickname"
            aria-describedby="nickname"
            value={nickname}
            onChange={changeNickname}
          />
          <Button variant="outline-secondary" onClick={handleNicknameCheck } style={{ height: '38px'}}>
          {isNicknameChecked
		 				?  <FaCheckCircle style={{ color: 'green' }} /> // 성공한 경우
						: false && <FaExclamationCircle style={{ color: 'yellow' }} />   // 실패한 경우
					 }
            별명 중복 체크
          </Button>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="password" style={{ minWidth: '150px' }}>
            비밀번호
          </InputGroup.Text>
          <Form.Control
            type="password"
            placeholder="password"
            aria-label="password"
            aria-describedby="password"
            value={password}
			onChange={handlePasswordChange} // 변경된 부분
			/>
		{isPasswordValid && <FaCheckCircle style={{ color: 'green' }} />} {/* 변경된 부분 */}
		</InputGroup>
		        
        <InputGroup className="mb-3">
          <InputGroup.Text id="confirmPassword" style={{ minWidth: '150px' }}>
            비밀번호 확인
          </InputGroup.Text>
          <Form.Control
            type="password"
            placeholder="confirm password"
            aria-label="confirm password"
            aria-describedby="confirm password"
			onChange={handleConfirmPasswordChange} // 변경된 부분
			/>
			{isPasswordMatch && <FaCheckCircle style={{ color: 'green' }} />} {/* 변경된 부분 */}
		  </InputGroup>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label={
              <span>
                <Button variant="link" onClick={handleTermClick}>이용약관</Button>{' '}
                및 
                <Button variant="link" onClick={handlePrivacyClick}>개인정보 취급 방침</Button>
              </span>
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="이메일수신동의"
          />
        </Form.Group>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="primary" type="button">
            회원가입
          </Button>
        </div>

        <Modal show={showTermModal} onHide={handleCloseTermModal}>
          <Modal.Header closeButton>
            <Modal.Title>이용약관</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={scrollBoxStyle}>
              <p>
                이용약관 내용을 스크롤바로 표시합니다. 여러 줄의 텍스트를 넣어도 스크롤바가 나타납니다.
              </p>
            </div>
          </Modal.Body>
        </Modal>

        <Modal show={showPrivacyModal} onHide={handleClosePrivacyModal}>
          <Modal.Header closeButton>
            <Modal.Title>개인정보 취급 방침</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={scrollBoxStyle}>
              <p>
                개인정보 취급 방침 내용을 스크롤바로 표시합니다. 여러 줄의 텍스트를 넣어도 스크롤바가 나타납니다.
              </p>
            </div>
          </Modal.Body>
        </Modal>

      </div>
    </div>
  );
}

export default Join;
