using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassANDMethods_KrutiNayee
{
    class Program
    {
        class Point
        {
            private int _height;
            private int _width;

            public Point()
            {
                _height = 0;
                _width = 0;
            }

            public Point(int height, int width)
            {
                Height = height;
                Width = width;
            }

            public int Height
            {
                get { return _height; }
                set
                {
                    if (value >= 0 && value <= 479)
                        _height = value;
                    else
                        throw new Exception("Height must be between 0 and 479");
                }
            }

            public int Width
            {
                get { return _width; }
                set
                {
                    if (value >= 0 && value <= 639)
                        _width = value;
                    else
                        throw new Exception("Width must be between 0 and 639");
                }
            }

            public void GetData()
            {
                Console.WriteLine("Enter height:");
                Height = int.Parse(Console.ReadLine());
                Console.WriteLine("Enter width:");
                Width = int.Parse(Console.ReadLine());
            }

            public void GetData(int height, int width)
            {
                Height = height;
                Width = width;
            }

            public void PutData()
            {
                Console.WriteLine("Height: " + Height);
                Console.WriteLine("Width: " + Width);
            }

            public override string ToString()
            {
                return $"Height: {Height}, Width: {Width}";
            }
        }
        static void Main(string[] args)
        {
            Point point = new Point();
            point.GetData();
            point.PutData();
            
            Console.ReadKey();
        }
    
    }

 

}


