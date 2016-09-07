import unittest
from flask import Flask
from server import app

class TestServer(unittest.TestCase):
    def setUp(self):
        pass

    def test_is_works(self):
        self.assertEqual(True, True)

    def test_user_list(self):
        tester = app.test_client(self)
        response = tester.get("/api/users")
        self.assertEquals(response.status_code, 302 )

if __name__ == '__main__':
    unittest.main()
